export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    public: {
        Tables: {
            admin_actions: {
                Row: {
                    action_type: string
                    admin_id: string | null
                    created_at: string | null
                    details: Json | null
                    id: string
                    target_id: string
                    target_type: string
                }
                Insert: {
                    action_type: string
                    admin_id?: string | null
                    created_at?: string | null
                    details?: Json | null
                    id?: string
                    target_id: string
                    target_type: string
                }
                Update: {
                    action_type?: string
                    admin_id?: string | null
                    created_at?: string | null
                    details?: Json | null
                    id?: string
                    target_id?: string
                    target_type?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "admin_actions_admin_id_fkey"
                        columns: ["admin_id"]
                        isOneToOne: false
                        referencedRelation: "admins"
                        referencedColumns: ["id"]
                    },
                ]
            }
            admins: {
                Row: {
                    created_at: string | null
                    email: string | null
                    id: string
                    is_active: boolean
                    last_login_at: string | null
                    name: string
                    role: string
                    updated_at: string | null
                }
                Insert: {
                    created_at?: string | null
                    email?: string | null
                    id: string
                    is_active?: boolean
                    last_login_at?: string | null
                    name: string
                    role: string
                    updated_at?: string | null
                }
                Update: {
                    created_at?: string | null
                    email?: string | null
                    id?: string
                    is_active?: boolean
                    last_login_at?: string | null
                    name?: string
                    role?: string
                    updated_at?: string | null
                }
                Relationships: []
            }
            approval_queue: {
                Row: {
                    created_at: string | null
                    id: string
                    item_id: string
                    item_type: string
                    rejection_reason: string | null
                    reviewed_at: string | null
                    reviewed_by: string | null
                    status: string
                    updated_at: string | null
                }
                Insert: {
                    created_at?: string | null
                    id?: string
                    item_id: string
                    item_type: string
                    rejection_reason?: string | null
                    reviewed_at?: string | null
                    reviewed_by?: string | null
                    status?: string
                    updated_at?: string | null
                }
                Update: {
                    created_at?: string | null
                    id?: string
                    item_id?: string
                    item_type?: string
                    rejection_reason?: string | null
                    reviewed_at?: string | null
                    reviewed_by?: string | null
                    status?: string
                    updated_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "approval_queue_reviewed_by_fkey"
                        columns: ["reviewed_by"]
                        isOneToOne: false
                        referencedRelation: "admins"
                        referencedColumns: ["id"]
                    },
                ]
            }
            calendar_events: {
                Row: {
                    created_at: string | null
                    description: string | null
                    end_time: string
                    external_calendar_id: string | null
                    id: string
                    job_id: string | null
                    location: string | null
                    professional_id: string
                    start_time: string
                    title: string
                    updated_at: string | null
                }
                Insert: {
                    created_at?: string | null
                    description?: string | null
                    end_time: string
                    external_calendar_id?: string | null
                    id?: string
                    job_id?: string | null
                    location?: string | null
                    professional_id: string
                    start_time: string
                    title: string
                    updated_at?: string | null
                }
                Update: {
                    created_at?: string | null
                    description?: string | null
                    end_time?: string
                    external_calendar_id?: string | null
                    id?: string
                    job_id?: string | null
                    location?: string | null
                    professional_id?: string
                    start_time?: string
                    title?: string
                    updated_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "calendar_events_job_id_fkey"
                        columns: ["job_id"]
                        isOneToOne: false
                        referencedRelation: "jobs"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "calendar_events_professional_id_fkey"
                        columns: ["professional_id"]
                        isOneToOne: false
                        referencedRelation: "professionals"
                        referencedColumns: ["id"]
                    },
                ]
            }
            clients: {
                Row: {
                    address: string | null
                    city: string | null
                    county: string | null
                    created_at: string | null
                    id: string
                    latitude: number | null
                    longitude: number | null
                    profile_id: string
                    total_jobs_posted: number
                    updated_at: string | null
                }
                Insert: {
                    address?: string | null
                    city?: string | null
                    county?: string | null
                    created_at?: string | null
                    id?: string
                    latitude?: number | null
                    longitude?: number | null
                    profile_id: string
                    total_jobs_posted?: number
                    updated_at?: string | null
                }
                Update: {
                    address?: string | null
                    city?: string | null
                    county?: string | null
                    created_at?: string | null
                    id?: string
                    latitude?: number | null
                    longitude?: number | null
                    profile_id?: string
                    total_jobs_posted?: number
                    updated_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "clients_profile_id_fkey"
                        columns: ["profile_id"]
                        isOneToOne: true
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                ]
            }
            favorites: {
                Row: {
                    client_id: string
                    created_at: string | null
                    id: string
                    professional_id: string
                }
                Insert: {
                    client_id: string
                    created_at?: string | null
                    id?: string
                    professional_id: string
                }
                Update: {
                    client_id?: string
                    created_at?: string | null
                    id?: string
                    professional_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "favorites_client_id_fkey"
                        columns: ["client_id"]
                        isOneToOne: false
                        referencedRelation: "clients"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "favorites_professional_id_fkey"
                        columns: ["professional_id"]
                        isOneToOne: false
                        referencedRelation: "professionals"
                        referencedColumns: ["id"]
                    },
                ]
            }
            job_images: {
                Row: {
                    caption: string | null
                    created_at: string | null
                    id: string
                    image_url: string
                    job_id: string
                    uploaded_by: string | null
                }
                Insert: {
                    caption?: string | null
                    created_at?: string | null
                    id?: string
                    image_url: string
                    job_id: string
                    uploaded_by?: string | null
                }
                Update: {
                    caption?: string | null
                    created_at?: string | null
                    id?: string
                    image_url?: string
                    job_id?: string
                    uploaded_by?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "job_images_job_id_fkey"
                        columns: ["job_id"]
                        isOneToOne: false
                        referencedRelation: "jobs"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "job_images_uploaded_by_fkey"
                        columns: ["uploaded_by"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                ]
            }
            jobs: {
                Row: {
                    budget_max: number | null
                    budget_min: number | null
                    completed_date: string | null
                    created_at: string | null
                    description: string | null
                    id: string
                    location_address: string | null
                    location_latitude: number | null
                    location_longitude: number | null
                    match_id: string
                    scheduled_date: string | null
                    status: string
                    title: string
                    updated_at: string | null
                }
                Insert: {
                    budget_max?: number | null
                    budget_min?: number | null
                    completed_date?: string | null
                    created_at?: string | null
                    description?: string | null
                    id?: string
                    location_address?: string | null
                    location_latitude?: number | null
                    location_longitude?: number | null
                    match_id: string
                    scheduled_date?: string | null
                    status?: string
                    title: string
                    updated_at?: string | null
                }
                Update: {
                    budget_max?: number | null
                    budget_min?: number | null
                    completed_date?: string | null
                    created_at?: string | null
                    description?: string | null
                    id?: string
                    location_address?: string | null
                    location_latitude?: number | null
                    location_longitude?: number | null
                    match_id?: string
                    scheduled_date?: string | null
                    status?: string
                    title?: string
                    updated_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "jobs_match_id_fkey"
                        columns: ["match_id"]
                        isOneToOne: true
                        referencedRelation: "matches"
                        referencedColumns: ["id"]
                    },
                ]
            }
            matches: {
                Row: {
                    client_id: string
                    completed_at: string | null
                    id: string
                    matched_at: string | null
                    professional_id: string
                    status: string
                    trade_id: string | null
                }
                Insert: {
                    client_id: string
                    completed_at?: string | null
                    id?: string
                    matched_at?: string | null
                    professional_id: string
                    status?: string
                    trade_id?: string | null
                }
                Update: {
                    client_id?: string
                    completed_at?: string | null
                    id?: string
                    matched_at?: string | null
                    professional_id?: string
                    status?: string
                    trade_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "matches_client_id_fkey"
                        columns: ["client_id"]
                        isOneToOne: false
                        referencedRelation: "clients"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "matches_professional_id_fkey"
                        columns: ["professional_id"]
                        isOneToOne: false
                        referencedRelation: "professionals"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "matches_trade_id_fkey"
                        columns: ["trade_id"]
                        isOneToOne: false
                        referencedRelation: "trades"
                        referencedColumns: ["id"]
                    },
                ]
            }
            messages: {
                Row: {
                    created_at: string | null
                    id: string
                    is_read: boolean
                    match_id: string
                    message_text: string
                    read_at: string | null
                    receiver_id: string
                    sender_id: string
                }
                Insert: {
                    created_at?: string | null
                    id?: string
                    is_read?: boolean
                    match_id: string
                    message_text: string
                    read_at?: string | null
                    receiver_id: string
                    sender_id: string
                }
                Update: {
                    created_at?: string | null
                    id?: string
                    is_read?: boolean
                    match_id?: string
                    message_text?: string
                    read_at?: string | null
                    receiver_id?: string
                    sender_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "messages_match_id_fkey"
                        columns: ["match_id"]
                        isOneToOne: false
                        referencedRelation: "matches"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "messages_receiver_id_fkey"
                        columns: ["receiver_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "messages_sender_id_fkey"
                        columns: ["sender_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                ]
            }
            notifications: {
                Row: {
                    category: string
                    created_at: string | null
                    id: string
                    is_read: boolean
                    is_sent: boolean
                    message: string
                    read_at: string | null
                    related_id: string | null
                    sent_at: string | null
                    title: string
                    type: string
                    user_id: string
                }
                Insert: {
                    category: string
                    created_at?: string | null
                    id?: string
                    is_read?: boolean
                    is_sent?: boolean
                    message: string
                    read_at?: string | null
                    related_id?: string | null
                    sent_at?: string | null
                    title: string
                    type: string
                    user_id: string
                }
                Update: {
                    category?: string
                    created_at?: string | null
                    id?: string
                    is_read?: boolean
                    is_sent?: boolean
                    message?: string
                    read_at?: string | null
                    related_id?: string | null
                    sent_at?: string | null
                    title?: string
                    type?: string
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "notifications_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                ]
            }
            payments: {
                Row: {
                    amount: number
                    created_at: string | null
                    currency: string
                    failed_reason: string | null
                    id: string
                    payment_date: string | null
                    payment_gateway: string
                    payment_method: string
                    professional_id: string
                    status: string
                    subscription_id: string
                    transaction_id: string | null
                    updated_at: string | null
                }
                Insert: {
                    amount: number
                    created_at?: string | null
                    currency?: string
                    failed_reason?: string | null
                    id?: string
                    payment_date?: string | null
                    payment_gateway: string
                    payment_method: string
                    professional_id: string
                    status?: string
                    subscription_id: string
                    transaction_id?: string | null
                    updated_at?: string | null
                }
                Update: {
                    amount?: number
                    created_at?: string | null
                    currency?: string
                    failed_reason?: string | null
                    id?: string
                    payment_date?: string | null
                    payment_gateway?: string
                    payment_method?: string
                    professional_id?: string
                    status?: string
                    subscription_id?: string
                    transaction_id?: string | null
                    updated_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "payments_professional_id_fkey"
                        columns: ["professional_id"]
                        isOneToOne: false
                        referencedRelation: "professionals"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "payments_subscription_id_fkey"
                        columns: ["subscription_id"]
                        isOneToOne: false
                        referencedRelation: "subscriptions"
                        referencedColumns: ["id"]
                    },
                ]
            }
            portfolio_images: {
                Row: {
                    caption: string | null
                    created_at: string | null
                    id: string
                    image_url: string
                    professional_id: string
                    sort_order: number
                }
                Insert: {
                    caption?: string | null
                    created_at?: string | null
                    id?: string
                    image_url: string
                    professional_id: string
                    sort_order?: number
                }
                Update: {
                    caption?: string | null
                    created_at?: string | null
                    id?: string
                    image_url?: string
                    professional_id?: string
                    sort_order?: number
                }
                Relationships: [
                    {
                        foreignKeyName: "portfolio_images_professional_id_fkey"
                        columns: ["professional_id"]
                        isOneToOne: false
                        referencedRelation: "professionals"
                        referencedColumns: ["id"]
                    },
                ]
            }
            professional_trades: {
                Row: {
                    created_at: string | null
                    id: string
                    professional_id: string
                    trade_id: string
                }
                Insert: {
                    created_at?: string | null
                    id?: string
                    professional_id: string
                    trade_id: string
                }
                Update: {
                    created_at?: string | null
                    id?: string
                    professional_id?: string
                    trade_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "professional_trades_professional_id_fkey"
                        columns: ["professional_id"]
                        isOneToOne: false
                        referencedRelation: "professionals"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "professional_trades_trade_id_fkey"
                        columns: ["trade_id"]
                        isOneToOne: false
                        referencedRelation: "trades"
                        referencedColumns: ["id"]
                    },
                ]
            }
            professionals: {
                Row: {
                    address: string | null
                    approval_status: string
                    average_rating: number
                    bio: string | null
                    city: string | null
                    company_name: string | null
                    county: string | null
                    created_at: string | null
                    id: string
                    latitude: number | null
                    longitude: number | null
                    profile_id: string
                    response_time_hours: number | null
                    tax_number: string | null
                    total_jobs_completed: number
                    total_reviews: number
                    updated_at: string | null
                    years_of_experience: number | null
                }
                Insert: {
                    address?: string | null
                    approval_status?: string
                    average_rating?: number
                    bio?: string | null
                    city?: string | null
                    company_name?: string | null
                    county?: string | null
                    created_at?: string | null
                    id?: string
                    latitude?: number | null
                    longitude?: number | null
                    profile_id: string
                    response_time_hours?: number | null
                    tax_number?: string | null
                    total_jobs_completed?: number
                    total_reviews?: number
                    updated_at?: string | null
                    years_of_experience?: number | null
                }
                Update: {
                    address?: string | null
                    approval_status?: string
                    average_rating?: number
                    bio?: string | null
                    city?: string | null
                    company_name?: string | null
                    county?: string | null
                    created_at?: string | null
                    id?: string
                    latitude?: number | null
                    longitude?: number | null
                    profile_id?: string
                    response_time_hours?: number | null
                    tax_number?: string | null
                    total_jobs_completed?: number
                    total_reviews?: number
                    updated_at?: string | null
                    years_of_experience?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "professionals_profile_id_fkey"
                        columns: ["profile_id"]
                        isOneToOne: true
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                ]
            }
            profiles: {
                Row: {
                    birth_date: string | null
                    created_at: string | null
                    email: string | null
                    first_name: string | null
                    id: string
                    is_active: boolean | null
                    is_verified: boolean | null
                    language: string | null
                    last_login_at: string | null
                    last_name: string | null
                    phone: string | null
                    profile_image_url: string | null
                    updated_at: string | null
                    user_type: string | null
                }
                Insert: {
                    birth_date?: string | null
                    created_at?: string | null
                    email?: string | null
                    first_name?: string | null
                    id: string
                    is_active?: boolean | null
                    is_verified?: boolean | null
                    language?: string | null
                    last_login_at?: string | null
                    last_name?: string | null
                    phone?: string | null
                    profile_image_url?: string | null
                    updated_at?: string | null
                    user_type?: string | null
                }
                Update: {
                    birth_date?: string | null
                    created_at?: string | null
                    email?: string | null
                    first_name?: string | null
                    id?: string
                    is_active?: boolean | null
                    is_verified?: boolean | null
                    language?: string | null
                    last_login_at?: string | null
                    last_name?: string | null
                    phone?: string | null
                    profile_image_url?: string | null
                    updated_at?: string | null
                    user_type?: string | null
                }
                Relationships: []
            }
            reports: {
                Row: {
                    created_at: string | null
                    description: string
                    id: string
                    related_match_id: string | null
                    related_message_id: string | null
                    report_type: string
                    reported_user_id: string
                    reporter_id: string
                    resolution_notes: string | null
                    reviewed_at: string | null
                    reviewed_by: string | null
                    status: string
                    updated_at: string | null
                }
                Insert: {
                    created_at?: string | null
                    description: string
                    id?: string
                    related_match_id?: string | null
                    related_message_id?: string | null
                    report_type: string
                    reported_user_id: string
                    reporter_id: string
                    resolution_notes?: string | null
                    reviewed_at?: string | null
                    reviewed_by?: string | null
                    status?: string
                    updated_at?: string | null
                }
                Update: {
                    created_at?: string | null
                    description?: string
                    id?: string
                    related_match_id?: string | null
                    related_message_id?: string | null
                    report_type?: string
                    reported_user_id?: string
                    reporter_id?: string
                    resolution_notes?: string | null
                    reviewed_at?: string | null
                    reviewed_by?: string | null
                    status?: string
                    updated_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "reports_related_match_id_fkey"
                        columns: ["related_match_id"]
                        isOneToOne: false
                        referencedRelation: "matches"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "reports_related_message_id_fkey"
                        columns: ["related_message_id"]
                        isOneToOne: false
                        referencedRelation: "messages"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "reports_reported_user_id_fkey"
                        columns: ["reported_user_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "reports_reporter_id_fkey"
                        columns: ["reporter_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "reports_reviewed_by_fkey"
                        columns: ["reviewed_by"]
                        isOneToOne: false
                        referencedRelation: "admins"
                        referencedColumns: ["id"]
                    },
                ]
            }
            reviews: {
                Row: {
                    client_id: string
                    created_at: string | null
                    id: string
                    is_approved: boolean
                    job_id: string
                    professional_id: string
                    rating: number
                    review_text: string | null
                }
                Insert: {
                    client_id: string
                    created_at?: string | null
                    id?: string
                    is_approved?: boolean
                    job_id: string
                    professional_id: string
                    rating: number
                    review_text?: string | null
                }
                Update: {
                    client_id?: string
                    created_at?: string | null
                    id?: string
                    is_approved?: boolean
                    job_id?: string
                    professional_id?: string
                    rating?: number
                    review_text?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "reviews_client_id_fkey"
                        columns: ["client_id"]
                        isOneToOne: false
                        referencedRelation: "clients"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "reviews_job_id_fkey"
                        columns: ["job_id"]
                        isOneToOne: true
                        referencedRelation: "jobs"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "reviews_professional_id_fkey"
                        columns: ["professional_id"]
                        isOneToOne: false
                        referencedRelation: "professionals"
                        referencedColumns: ["id"]
                    },
                ]
            }
            service_areas: {
                Row: {
                    county: string
                    created_at: string | null
                    id: string
                    professional_id: string
                    radius_km: number
                    updated_at: string | null
                }
                Insert: {
                    county: string
                    created_at?: string | null
                    id?: string
                    professional_id: string
                    radius_km?: number
                    updated_at?: string | null
                }
                Update: {
                    county?: string
                    created_at?: string | null
                    id?: string
                    professional_id?: string
                    radius_km?: number
                    updated_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "service_areas_professional_id_fkey"
                        columns: ["professional_id"]
                        isOneToOne: false
                        referencedRelation: "professionals"
                        referencedColumns: ["id"]
                    },
                ]
            }
            subscriptions: {
                Row: {
                    cancel_at_period_end: boolean
                    cancelled_at: string | null
                    created_at: string | null
                    current_period_end: string
                    current_period_start: string
                    id: string
                    monthly_price: number
                    professional_id: string
                    status: string
                    subscription_type: string
                    trial_end_date: string | null
                    trial_start_date: string | null
                    updated_at: string | null
                }
                Insert: {
                    cancel_at_period_end?: boolean
                    cancelled_at?: string | null
                    created_at?: string | null
                    current_period_end: string
                    current_period_start: string
                    id?: string
                    monthly_price: number
                    professional_id: string
                    status?: string
                    subscription_type: string
                    trial_end_date?: string | null
                    trial_start_date?: string | null
                    updated_at?: string | null
                }
                Update: {
                    cancel_at_period_end?: boolean
                    cancelled_at?: string | null
                    created_at?: string | null
                    current_period_end?: string
                    current_period_start?: string
                    id?: string
                    monthly_price?: number
                    professional_id?: string
                    status?: string
                    subscription_type?: string
                    trial_end_date?: string | null
                    trial_start_date?: string | null
                    updated_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "subscriptions_professional_id_fkey"
                        columns: ["professional_id"]
                        isOneToOne: false
                        referencedRelation: "professionals"
                        referencedColumns: ["id"]
                    },
                ]
            }
            trades: {
                Row: {
                    created_at: string | null
                    description_en: string | null
                    description_hu: string | null
                    icon_url: string | null
                    id: string
                    is_active: boolean
                    name_en: string | null
                    name_hu: string
                    sort_order: number
                    updated_at: string | null
                }
                Insert: {
                    created_at?: string | null
                    description_en?: string | null
                    description_hu?: string | null
                    icon_url?: string | null
                    id?: string
                    is_active?: boolean
                    name_en?: string | null
                    name_hu: string
                    sort_order?: number
                    updated_at?: string | null
                }
                Update: {
                    created_at?: string | null
                    description_en?: string | null
                    description_hu?: string | null
                    icon_url?: string | null
                    id?: string
                    is_active?: boolean
                    name_en?: string | null
                    name_hu?: string
                    sort_order?: number
                    updated_at?: string | null
                }
                Relationships: []
            }
            translations: {
                Row: {
                    context: string
                    created_at: string | null
                    id: string
                    key: string
                    language: string
                    updated_at: string | null
                    value: string
                }
                Insert: {
                    context: string
                    created_at?: string | null
                    id?: string
                    key: string
                    language: string
                    updated_at?: string | null
                    value: string
                }
                Update: {
                    context?: string
                    created_at?: string | null
                    id?: string
                    key?: string
                    language?: string
                    updated_at?: string | null
                    value?: string
                }
                Relationships: []
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

export type Tables<
    PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
            Row: infer R
        }
    ? R
    : never
    : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
            Row: infer R
        }
    ? R
    : never
    : never

export type TablesInsert<
    PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Insert: infer I
    }
    ? I
    : never
    : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
    }
    ? I
    : never
    : never

export type TablesUpdate<
    PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Update: infer U
    }
    ? U
    : never
    : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
    }
    ? U
    : never
    : never

export type Enums<
    PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
    PublicCompositeTypeNameOrOptions extends
    | keyof Database["public"]["CompositeTypes"]
    | { schema: keyof Database },
    CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
        schema: keyof Database
    }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
    ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
    : PublicCompositeTypeNameOrOptions extends keyof Database["public"]["CompositeTypes"]
    ? Database["public"]["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
