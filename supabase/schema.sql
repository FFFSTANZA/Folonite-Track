-- Enable UUID extension (if needed for other things, but gen_random_uuid() is built-in)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Departments
CREATE TABLE IF NOT EXISTS departments (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    code TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 2. App Users
CREATE TABLE IF NOT EXISTS app_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT,
    email TEXT UNIQUE NOT NULL,
    role TEXT CHECK (role IN ('admin', 'manager', 'user')),
    department TEXT REFERENCES departments(id) ON DELETE SET NULL,
    phone TEXT,
    last_login TIMESTAMP WITH TIME ZONE,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
    avatar_url TEXT,
    must_change_password BOOLEAN DEFAULT false,
    password_changed_at TIMESTAMP WITH TIME ZONE,
    active_session_id TEXT,
    password_hash TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 3. User Settings
CREATE TABLE IF NOT EXISTS user_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES app_users(id) ON DELETE CASCADE UNIQUE,
    notifications BOOLEAN DEFAULT true,
    email_notifications BOOLEAN DEFAULT true,
    notification_types JSONB DEFAULT '{}'::jsonb,
    dark_mode BOOLEAN DEFAULT false,
    dashboard_prefs JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 4. Properties
CREATE TABLE IF NOT EXISTS properties (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT,
    type TEXT,
    status TEXT DEFAULT 'active',
    manager TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 5. Asset Types
CREATE TABLE IF NOT EXISTS asset_types (
    name TEXT PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 6. Assets
CREATE TABLE IF NOT EXISTS assets (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT REFERENCES asset_types(name) ON DELETE SET NULL,
    property TEXT,
    property_id TEXT REFERENCES properties(id) ON DELETE SET NULL,
    department TEXT REFERENCES departments(id) ON DELETE SET NULL,
    quantity INTEGER DEFAULT 1,
    purchase_date DATE,
    expiry_date DATE,
    po_number TEXT,
    condition TEXT,
    status TEXT,
    location TEXT,
    description TEXT,
    serial_number TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    created_by UUID REFERENCES app_users(id) ON DELETE SET NULL,
    created_by_name TEXT,
    created_by_email TEXT,
    amc_enabled BOOLEAN DEFAULT false,
    amc_start_date DATE,
    amc_end_date DATE
);

-- 7. Tickets
CREATE TABLE IF NOT EXISTS tickets (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    target_role TEXT CHECK (target_role IN ('admin', 'manager')),
    status TEXT CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')),
    assignee TEXT,
    priority TEXT CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    sla_due_at TIMESTAMP WITH TIME ZONE,
    close_note TEXT,
    created_by TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE,
    property_id TEXT REFERENCES properties(id) ON DELETE SET NULL
);

-- 8. Ticket Events
CREATE TABLE IF NOT EXISTS ticket_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ticket_id TEXT REFERENCES tickets(id) ON DELETE CASCADE,
    event_type TEXT CHECK (event_type IN ('created', 'status_change', 'comment', 'closed')),
    author TEXT,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 9. Notifications
CREATE TABLE IF NOT EXISTS notifications (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    message TEXT,
    type TEXT,
    read BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    user_id UUID REFERENCES app_users(id) ON DELETE CASCADE,
    user_name TEXT
);

-- 10. User Property Access
CREATE TABLE IF NOT EXISTS user_property_access (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES app_users(id) ON DELETE CASCADE,
    property_id TEXT REFERENCES properties(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    UNIQUE(user_id, property_id)
);

-- 11. System Settings
CREATE TABLE IF NOT EXISTS system_settings (
    id BOOLEAN PRIMARY KEY DEFAULT true CHECK (id = true),
    timezone TEXT DEFAULT 'UTC',
    language TEXT DEFAULT 'en',
    backup_frequency TEXT,
    auto_backup BOOLEAN DEFAULT true,
    appearance JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 12. Audit Sessions
CREATE TABLE IF NOT EXISTS audit_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    started_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    frequency_months INTEGER CHECK (frequency_months IN (1, 3, 6)),
    initiated_by TEXT,
    is_active BOOLEAN DEFAULT true,
    property_id TEXT REFERENCES properties(id) ON DELETE SET NULL
);

-- 13. Audit Assignments
CREATE TABLE IF NOT EXISTS audit_assignments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID REFERENCES audit_sessions(id) ON DELETE CASCADE,
    department TEXT REFERENCES departments(id) ON DELETE CASCADE,
    status TEXT CHECK (status IN ('pending', 'submitted')),
    submitted_at TIMESTAMP WITH TIME ZONE,
    submitted_by TEXT,
    UNIQUE(session_id, department)
);

-- 14. Audit Reviews
CREATE TABLE IF NOT EXISTS audit_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID REFERENCES audit_sessions(id) ON DELETE CASCADE,
    asset_id TEXT REFERENCES assets(id) ON DELETE CASCADE,
    department TEXT,
    status TEXT CHECK (status IN ('verified', 'missing', 'damaged')),
    comment TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    UNIQUE(session_id, asset_id)
);

-- 15. Audit Reports
CREATE TABLE IF NOT EXISTS audit_reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID REFERENCES audit_sessions(id) ON DELETE CASCADE,
    generated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    generated_by TEXT,
    payload JSONB
);

-- 16. Audit Incharge
CREATE TABLE IF NOT EXISTS audit_incharge (
    property_id TEXT PRIMARY KEY REFERENCES properties(id) ON DELETE CASCADE,
    user_id UUID REFERENCES app_users(id) ON DELETE CASCADE,
    user_name TEXT
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_assets_property_id ON assets(property_id);
CREATE INDEX IF NOT EXISTS idx_assets_department ON assets(department);
CREATE INDEX IF NOT EXISTS idx_tickets_status ON tickets(status);
CREATE INDEX IF NOT EXISTS idx_tickets_assignee ON tickets(assignee);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_sessions_is_active ON audit_sessions(is_active);

-- ==========================================
-- Stored Procedures (RPCs)
-- ==========================================

-- 1. start_audit_session_v2
CREATE OR REPLACE FUNCTION start_audit_session_v2(p_frequency_months INT, p_initiated_by TEXT, p_property_id TEXT DEFAULT NULL)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
    v_session_id UUID;
    v_session_data JSONB;
BEGIN
    INSERT INTO audit_sessions (frequency_months, initiated_by, property_id, is_active)
    VALUES (p_frequency_months, p_initiated_by, p_property_id, true)
    RETURNING id INTO v_session_id;

    SELECT to_jsonb(s.*) INTO v_session_data FROM audit_sessions s WHERE id = v_session_id;
    RETURN v_session_data;
END;
$$;

-- 2. end_audit_session_v1
CREATE OR REPLACE FUNCTION end_audit_session_v1(p_session_id UUID)
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE audit_sessions
    SET is_active = false
    WHERE id = p_session_id;
END;
$$;

-- 3. ensure_audit_assignment_v1
CREATE OR REPLACE FUNCTION ensure_audit_assignment_v1(p_session_id UUID, p_department TEXT)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
    v_assignment_data JSONB;
BEGIN
    INSERT INTO audit_assignments (session_id, department, status)
    VALUES (p_session_id, p_department, 'pending')
    ON CONFLICT (session_id, department) DO UPDATE SET status = audit_assignments.status
    RETURNING to_jsonb(audit_assignments.*) INTO v_assignment_data;
    
    RETURN v_assignment_data;
END;
$$;

-- 4. upsert_audit_reviews_v1
CREATE OR REPLACE FUNCTION upsert_audit_reviews_v1(p_session_id UUID, p_department TEXT, p_rows_json JSONB)
RETURNS VOID
LANGUAGE plpgsql
AS $$
DECLARE
    item JSONB;
BEGIN
    FOR item IN SELECT * FROM jsonb_array_elements(p_rows_json)
    LOOP
        INSERT INTO audit_reviews (session_id, asset_id, department, status, comment, updated_at)
        VALUES (
            p_session_id,
            (item->>'asset_id'),
            p_department,
            (item->>'status'),
            (item->>'comment'),
            NOW()
        )
        ON CONFLICT (session_id, asset_id) 
        DO UPDATE SET 
            status = EXCLUDED.status,
            comment = EXCLUDED.comment,
            updated_at = NOW();
    END LOOP;
END;
$$;

-- 5. submit_audit_assignment_v1
CREATE OR REPLACE FUNCTION submit_audit_assignment_v1(p_session_id UUID, p_department TEXT, p_submitted_by TEXT)
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE audit_assignments
    SET status = 'submitted',
        submitted_at = NOW(),
        submitted_by = p_submitted_by
    WHERE session_id = p_session_id AND department = p_department;
END;
$$;

-- 6. get_audit_reviews_for_session_v2
CREATE OR REPLACE FUNCTION get_audit_reviews_for_session_v2(p_session_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
    v_results JSONB;
BEGIN
    SELECT jsonb_agg(ar.*) INTO v_results FROM audit_reviews ar WHERE ar.session_id = p_session_id;
    RETURN COALESCE(v_results, '[]'::jsonb);
END;
$$;

-- 7. set_audit_incharge_v1
CREATE OR REPLACE FUNCTION set_audit_incharge_v1(p_property_id TEXT, p_user_id UUID, p_user_name TEXT)
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO audit_incharge (property_id, user_id, user_name)
    VALUES (p_property_id, p_user_id, p_user_name)
    ON CONFLICT (property_id) 
    DO UPDATE SET user_id = EXCLUDED.user_id, user_name = EXCLUDED.user_name;
END;
$$;

-- 8. get_audit_incharge_for_user_v1
CREATE OR REPLACE FUNCTION get_audit_incharge_for_user_v1(p_user_id UUID, p_user_email TEXT DEFAULT NULL)
RETURNS TABLE (property_id TEXT)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT ai.property_id 
    FROM audit_incharge ai
    WHERE ai.user_id = p_user_id; 
    -- Could add logic for email if needed, but user_id is safer
END;
$$;

-- 9. set_audit_incharge_for_user_v1
CREATE OR REPLACE FUNCTION set_audit_incharge_for_user_v1(p_user_id UUID, p_user_name TEXT, p_property_ids TEXT[])
RETURNS VOID
LANGUAGE plpgsql
AS $$
DECLARE
    pid TEXT;
BEGIN
    -- Remove properties not in the list for this user
    DELETE FROM audit_incharge WHERE user_id = p_user_id AND property_id != ALL(p_property_ids);

    -- Upsert the ones in the list
    FOREACH pid IN ARRAY p_property_ids
    LOOP
        INSERT INTO audit_incharge (property_id, user_id, user_name)
        VALUES (pid, p_user_id, p_user_name)
        ON CONFLICT (property_id) DO UPDATE SET user_id = EXCLUDED.user_id, user_name = EXCLUDED.user_name;
    END LOOP;
END;
$$;

-- 10. create_audit_report_v1
CREATE OR REPLACE FUNCTION create_audit_report_v1(p_session_id UUID, p_generated_by TEXT)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
    v_report_id UUID;
    v_payload JSONB;
    v_report_data JSONB;
BEGIN
    -- Generate some payload from the session data (simplified)
    SELECT jsonb_build_object(
        'session_id', p_session_id,
        'reviews', (SELECT jsonb_agg(ar) FROM audit_reviews ar WHERE ar.session_id = p_session_id),
        'generated_at', NOW()
    ) INTO v_payload;

    INSERT INTO audit_reports (session_id, generated_by, payload)
    VALUES (p_session_id, p_generated_by, v_payload)
    RETURNING id INTO v_report_id;

    SELECT to_jsonb(ar.*) INTO v_report_data FROM audit_reports ar WHERE id = v_report_id;
    RETURN v_report_data;
END;
$$;

-- 11. set_user_property_access_v1
CREATE OR REPLACE FUNCTION set_user_property_access_v1(p_user_id UUID, p_property_ids TEXT[])
RETURNS VOID
LANGUAGE plpgsql
AS $$
DECLARE
    pid TEXT;
BEGIN
     -- Remove access not in list
    DELETE FROM user_property_access WHERE user_id = p_user_id AND property_id != ALL(p_property_ids);
    
    -- Add access
    FOREACH pid IN ARRAY p_property_ids
    LOOP
        INSERT INTO user_property_access (user_id, property_id)
        VALUES (p_user_id, pid)
        ON CONFLICT (user_id, property_id) DO NOTHING;
    END LOOP;
END;
$$;

-- 12. add_notifications_for_role_v1
CREATE OR REPLACE FUNCTION add_notifications_for_role_v1(p_title TEXT, p_message TEXT, p_type TEXT, p_role TEXT)
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO notifications (id, title, message, type, read, user_id, user_name)
    SELECT 
        'NTF-' || floor(random() * 900000 + 100000)::text,
        p_title,
        p_message,
        p_type,
        false,
        id, 
        name
    FROM app_users
    WHERE role = p_role AND status != 'inactive';
END;
$$;

-- 13. delete_asset_type_v1
CREATE OR REPLACE FUNCTION delete_asset_type_v1(p_name TEXT)
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM asset_types WHERE name = p_name;
END;
$$;

-- 14. self_set_password_hash_v1
CREATE OR REPLACE FUNCTION self_set_password_hash_v1(p_email TEXT, p_new_password_hash TEXT)
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE app_users
    SET password_hash = p_new_password_hash,
        password_changed_at = NOW(),
        must_change_password = false
    WHERE email = p_email;
END;
$$;

-- 15. admin_set_user_password_hash_v1
CREATE OR REPLACE FUNCTION admin_set_user_password_hash_v1(p_admin_email TEXT, p_target_user_id UUID, p_new_password_hash TEXT)
RETURNS VOID
LANGUAGE plpgsql
AS $$
DECLARE
    v_admin_role TEXT;
BEGIN
    SELECT role INTO v_admin_role FROM app_users WHERE email = p_admin_email;
    IF v_admin_role = 'admin' THEN
        UPDATE app_users
        SET password_hash = p_new_password_hash,
            password_changed_at = NOW(),
            must_change_password = false
        WHERE id = p_target_user_id;
    ELSE
        RAISE EXCEPTION 'Not authorized';
    END IF;
END;
$$;
