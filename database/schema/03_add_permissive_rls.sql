-- ============================================================================
-- 03_add_permissive_rls.sql
-- FIGYELEM: Ez csak fejlesztői környezetben használható!
-- Minden hitelesített felhasználónak teljes hozzáférést ad.
-- ============================================================================

-- Segédfüggvény a policy létrehozáshoz
DO $$
DECLARE
    t text;
BEGIN
    FOR t IN 
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
          AND table_type = 'BASE TABLE'
          AND table_name != 'spatial_ref_sys' -- PostGIS rendszer tábla kihagyása
    LOOP
        -- Létező policy-k törlése
        BEGIN
            EXECUTE format('DROP POLICY IF EXISTS "Enable all access for authenticated users" ON %I', t);
        EXCEPTION WHEN OTHERS THEN NULL; END;

        -- Új policy létrehozása
        EXECUTE format('
            CREATE POLICY "Enable all access for authenticated users" ON %I
            FOR ALL
            TO authenticated
            USING (true)
            WITH CHECK (true)
        ', t);
        
        -- Anonim olvasás engedélyezése a 'trades' és 'profiles' táblákra
        IF t IN ('trades', 'profiles', 'professionals', 'portfolio_images', 'reviews') THEN
             BEGIN
                EXECUTE format('DROP POLICY IF EXISTS "Enable read access for anon" ON %I', t);
            EXCEPTION WHEN OTHERS THEN NULL; END;

            EXECUTE format('
                CREATE POLICY "Enable read access for anon" ON %I
                FOR SELECT
                TO anon
                USING (true)
            ', t);
        END IF;

    END LOOP;
END
$$;
