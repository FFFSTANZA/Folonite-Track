# Authentication & User Management

This document outlines how users are authenticated, added, and managed within the Folonite Track application.

## Authentication Overview

The application supports both Supabase-based authentication and a local fallback mode for development or demo purposes.

### Login Process
- **Login Page (`src/pages/Login.tsx`)**: The entry point for users.
- **Methods**: Users can sign in using their email/username and password.
- **Session**: Upon successful login, user session data is stored in `localStorage` (`current_user_id`, `auth_user`).
- **Demo Mode**: If the application is in demo mode, specific demo credentials can be used.

### Password Reset
- **Flow**: A comprehensive password reset flow is implemented, involving:
  1.  **Request**: User enters their email (`requestPasswordReset`).
  2.  **Verification**: A one-time passcode (OTP) is sent to the email (simulated or real depending on backend).
  3.  **Reset**: After verifying the code, the user sets a new password (`completePasswordReset`).

## User Management

User management is primarily handled in the **User Management** page (`src/pages/Users.tsx`) and backed by the `src/services/users.ts` service.

### Adding a New User

1.  **Navigation**: Administrators navigate to the "User Management" page.
2.  **Add User Dialog**: Click the "Add User" button to open the form.
3.  **Required Fields**:
    -   **Name**: Full name of the user.
    -   **Email**: Unique email address.
    -   **Role**: Role assignment (e.g., Admin, Manager, User).
    -   **Department**: Assigned department (can be selected from existing or typed new).
4.  **Optional Configuration**:
    -   **Phone**: Contact number.
    -   **Password**: An initial password can be set by the admin.
    -   **Permissions**: Granular view/edit permissions for specific modules (Assets, Properties, etc.) can be configured.
    -   **Property Access**: Assign specific properties the user is allowed to access.
    -   **Department Access**: Assign specific departments the user can manage.

### Backend Process (`createUser`)
-   **Supabase**: The user data is inserted into the `app_users` table.
-   **Password Hashing**: If a password is provided, it is hashed before storage.
-   **Permissions Persisting**:
    -   **Property Access**: Saved via `setUserPropertyAccess`.
    -   **Department Access**: Saved via `setUserDepartmentAccess`.
    -   **Page Permissions**: Saved via `setUserPermissions`.
-   **Fallback**: If the Supabase environment is not configured, the user is created locally and stored in `localStorage` to allow for offline/demo usage.

### Managing Existing Users

-   **Editing**: Admins can update user details, change roles, assign/unassign properties, and modify permission sets.
-   **Deleting**: Users can be deleted, which removes their record from `app_users`.
-   **Search & Filter**: The user list can be filtered by role, status, property, or searched by name/email.

## Roles & Permissions

The application uses a role-based access control (RBAC) system combined with granular overrides.

-   **Roles**:
    -   **Admin**: Full access.
    -   **Manager**: Can verify/approve/audit but usually restricted edit rights compared to Admin.
    -   **User**: Standard access, typically restricted to viewing or limited editing.
-   **Granular Permissions**:
    -   Each user has specific `view` (v) and `edit` (e) flags for key modules: `assets`, `properties`, `qrcodes`, `users`, `reports`, `settings`, `audit`.
    -   These permissions are checked throughout the application to toggle visibility of UI elements and protect routes.

## Directory Structure
-   `src/pages/Users.tsx`: Main UI for listing and managing users.
-   `src/pages/Login.tsx`: Login interface and logic.
-   `src/services/users.ts`: Service layer for user CRUD operations.
-   `src/services/auth.ts`: Authentication primitives (login, password hashing).
-   `src/services/permissions.ts`: Logic for handling role defaults and permission overrides.
