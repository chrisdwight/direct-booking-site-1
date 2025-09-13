import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';

const AppContent: React.FC = () => {
    const { t } = useLanguage();
    
    return (
        <Router>
            {/* Floating Waves Background */}
            <div className="floating-waves"></div>
            
            {/* Top Navigation */}
            <header
                style={{
                    width: "100%",
                    background: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    padding: "1.25rem 0",
                    marginBottom: "2rem"
                }}
            >
                <div
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                        padding: "0 1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    {/* Ocean Wave Icon */}
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <div className="ocean-icon" style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                            <div className="wave-icon"></div>
                            <span style={{ 
                                marginLeft: "0.5rem", 
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 600, 
                                fontSize: "1.3rem", 
                                color: "#2c3e50",
                                letterSpacing: "0.02em",
                                transition: "color 0.2s"
                            }}>
                                Rosarito Rentals
                            </span>
                        </div>
                    </Link>
                    
                    {/* Navigation Links */}
                    <div style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "3rem" 
                    }}>
                        <Link 
                            to="/" 
                            style={{ 
                                textDecoration: "none", 
                                color: "#2c3e50",
                                fontFamily: "'Nunito Sans', sans-serif",
                                fontWeight: 600,
                                fontSize: "1.1rem",
                                letterSpacing: "0.01em",
                                transition: "color 0.2s"
                            }}
                        >
                            {t('home')}
                        </Link>
                        <Link 
                            to="/" 
                            style={{ 
                                textDecoration: "none", 
                                color: "#2c3e50",
                                fontFamily: "'Nunito Sans', sans-serif",
                                fontWeight: 600,
                                fontSize: "1.1rem",
                                letterSpacing: "0.01em",
                                transition: "color 0.2s"
                            }}
                        >
                            {t('contactUs')}
                        </Link>
                        <LanguageSwitcher />
                    </div>
                </div>
            </header>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/property/:id" component={PropertyDetailsPage} />
            </Switch>
            
            {/* Footer */}
            <footer className="site-footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-brand">
                            <div className="wave-icon"></div>
                            <h3>Rosarito Rentals</h3>
                        </div>
                        <p>Experience the best oceanfront vacation rentals in beautiful Rosarito, Mexico. Your perfect beach getaway awaits.</p>
                    </div>
                    
                    <div className="footer-section">
                        <h4>{t('quickLinks')}</h4>
                        <ul>
                            <li><a href="/">{t('home')}</a></li>
                            <li><a href="/">Properties</a></li>
                            <li><a href="/">{t('contactUs')}</a></li>
                            <li><a href="/">Book Now</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4>{t('contactInfo')}</h4>
                        <ul>
                            <li>📍 Rosarito, Baja California, Mexico</li>
                            <li>📧 info@rosaritorentals.com</li>
                            <li>📞 +1 (555) 123-4567</li>
                            <li>🌐 www.rosaritorentals.com</li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4>{t('followUs')}</h4>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook">📘</a>
                            <a href="#" aria-label="Instagram">📷</a>
                            <a href="#" aria-label="Twitter">🐦</a>
                            <a href="#" aria-label="YouTube">📺</a>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>&copy; 2025 Rosarito Rentals. {t('allRightsReserved')}</p>
                        <div className="footer-links">
                            <a href="/">{t('privacyPolicy')}</a>
                            <a href="/">{t('termsOfService')}</a>
                            <a href="/">{t('cancellationPolicy')}</a>
                        </div>
                    </div>
                </div>
            </footer>
        </Router>
    );
};

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    );
};

export default App;