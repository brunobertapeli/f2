import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
// import { ThemeSupa } from '@supabase/auth-ui-shared'; // Not strictly needed if using 'dark' theme and variables
import { useAuth } from '../AuthContext';
import { supabase } from '../supabase';

export default function AuthModal() {
  const { authModalOpen, closeAuthModal } = useAuth();

  if (!authModalOpen) return null;

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal-container">
        <button className="auth-modal-close" onClick={closeAuthModal}>×</button>
        <div className="auth-modal-content">
          <h2 className="auth-modal-title">Sign In / Sign Up</h2>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: 'dark', // Use Supabase's built-in dark theme preset
              variables: {
                default: {
                  colors: {
                    brand: 'var(--primary)', // Your app's primary color
                    brandAccent: 'var(--primary-dark)', // Darker shade of primary
                    brandButtonText: 'white',
                    // Default button colors might need adjustment if they don't pick up CSS vars
                    // defaultButtonBackground: 'var(--background-input)',
                    // defaultButtonBackgroundHover: 'var(--border)',
                    // defaultButtonBorder: 'var(--border)',
                    // defaultButtonText: 'var(--text)',
                    // inputBackground: 'var(--background-input)',
                    // inputBorder: 'var(--border)',
                    // inputText: 'var(--text)',
                    // inputLabelText: 'var(--text-light)',
                    // ... other color overrides if needed
                  },
                  fonts: {
                    bodyFontFamily: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
                    buttonFontFamily: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
                    labelFontFamily: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
                  },
                  radii: {
                    borderRadiusButton: '0.375rem',
                    buttonBorderRadius: '0.375rem',
                    inputBorderRadius: '0.375rem',
                  }
                },
              },
            }}
            providers={['google', 'facebook', 'apple']}
            redirectTo={window.location.origin}
            magicLink={true}
            socialLayout="horizontal" // Optional: for a more compact look
          />
        </div>
      </div>
    </div>
  );
} 
