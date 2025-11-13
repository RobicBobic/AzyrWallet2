import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Menu, X, Wallet, TrendingUp, BarChart2, Shield, Zap, Globe, ChevronDown, Users, Activity, Award } from 'lucide-react';
import './azyr-wallet.css';
import logo from './logo.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('holdings');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const chartData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 7500 },
    { name: 'Jul', value: 8200 },
  ];

  const leaderboardData = [
    { rank: 1, address: '0x742d...3f9a', pnl: '+$125,420', winRate: '94.2%', trades: 1247, badge: 'DIAMOND' },
    { rank: 2, address: '0x8a1b...7c2e', pnl: '+$98,750', winRate: '91.8%', trades: 1089, badge: 'PLATINUM' },
    { rank: 3, address: '0x3d9f...1a4b', pnl: '+$87,320', winRate: '89.5%', trades: 956, badge: 'GOLD' },
    { rank: 4, address: '0x5e2c...8d7f', pnl: '+$76,890', winRate: '88.1%', trades: 834, badge: 'GOLD' },
    { rank: 5, address: '0x9b4a...2e6c', pnl: '+$65,210', winRate: '86.7%', trades: 723, badge: 'SILVER' },
    { rank: 6, address: '0x1c7e...5f9d', pnl: '+$58,940', winRate: '85.3%', trades: 687, badge: 'SILVER' },
    { rank: 7, address: '0x4f8d...3a1b', pnl: '+$52,760', winRate: '83.9%', trades: 612, badge: 'BRONZE' },
    { rank: 8, address: '0x7a3c...6e2f', pnl: '+$47,580', winRate: '82.5%', trades: 589, badge: 'BRONZE' },
  ];

  const features = [
    {
      icon: <BarChart2 size={32} />,
      title: 'Advanced Analytics',
      description: 'Track your portfolio performance with real-time charts and detailed analytics across all your wallets.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Multi-Chain Support',
      description: 'Connect and analyze wallets across Ethereum, Solana, BSC, Polygon, and 50+ other blockchains.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Secure & Private',
      description: 'Your keys never leave your device. We use read-only access to ensure maximum security.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Real-Time Updates',
      description: 'Get instant notifications on price changes, transactions, and portfolio performance.'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Performance Tracking',
      description: 'Monitor your gains, losses, and overall portfolio health with comprehensive dashboards.'
    },
    {
      icon: <Wallet size={32} />,
      title: 'Wallet Integration',
      description: 'Seamlessly connect with MetaMask, WalletConnect, Phantom, and all major wallet providers.'
    }
  ];

  const faqs = [
    { 
      question: 'What is Azyr Wallet?', 
      answer: 'Azyr Wallet is a comprehensive cryptocurrency wallet analysis platform that provides real-time tracking, advanced analytics, and portfolio management across multiple blockchains. Simply connect your wallet to see detailed insights, performance metrics, and trading statistics.' 
    },
    { 
      question: 'Which wallets and blockchains are supported?', 
      answer: 'We support all major blockchain wallets including MetaMask, Phantom, Trust Wallet, Ledger, and Trezor. Our platform works across Ethereum, Solana, Binance Smart Chain, Polygon, Avalanche, Arbitrum, and 50+ other networks.' 
    },
    { 
      question: 'Is Azyr Wallet free to use?', 
      answer: 'Azyr Wallet offers a free tier with essential features including portfolio tracking, basic analytics, and wallet connection. Premium plans unlock advanced features like detailed trading analytics, tax reporting, DeFi position tracking, and priority support.' 
    },
    {
      question: 'How secure is my data with Azyr Wallet?',
      answer: 'Your security is our top priority. We never store your private keys or seed phrases. All data is encrypted end-to-end, and we use read-only access to display your portfolio. Your sensitive information never leaves your device.'
    },
    {
      question: 'Can I track multiple wallets at once?',
      answer: 'Yes! Premium users can track unlimited wallets across different blockchains. You can create custom portfolios, set up alerts, and get comprehensive analytics across all your holdings in one unified dashboard.'
    }
  ];

  const stats = [
    { icon: <Users size={24} />, value: '50K+', label: 'Active Users' },
    { icon: <Activity size={24} />, value: '$2.5B+', label: 'Assets Tracked' },
    { icon: <BarChart2 size={24} />, value: '15M+', label: 'Transactions' },
    { icon: <Award size={24} />, value: '99.9%', label: 'Uptime' },
  ];

  const handleConnectWallet = () => {
    if (walletAddress.trim()) {
      setIsConnected(true);
      setShowWalletModal(false);
      setTimeout(() => {
        alert('Wallet ' + walletAddress.substring(0, 6) + '...' + walletAddress.substring(walletAddress.length - 4) + ' successfully connected!');
      }, 500);
    } else {
      alert('Please enter a valid wallet address');
    }
  };

  const handleDisconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
    alert('Wallet disconnected successfully');
  };

  const handleGetStarted = () => {
    setShowWalletModal(true);
  };

  const handleViewDocs = () => {
    window.open('https://docs.azyrwallet.com', '_blank');
  };

  const handleJoinCommunity = () => {
    window.open('https://discord.gg/azyrwallet', '_blank');
  };

  const handleViewOnExplorer = (wallet) => {
    window.open('https://etherscan.io/address/' + wallet, '_blank');
  };

  const handleUpgradeToPremium = () => {
    alert('Premium features coming soon! Get early access at 50% off.');
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <img src={logo} alt="Azyr Wallet Logo" className="logo-image" />
              <span>AZYR WALLET</span>
            </div>
            
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <a href="#features">Features</a>
              <a href="#analytics">Analytics</a>
              <a href="#leaderboard">Leaderboard</a>
              <a href="#faq">FAQ</a>
              {!isConnected ? (
                <button className="btn-primary" onClick={handleGetStarted}>
                  Connect Wallet
                </button>
              ) : (
                <button className="btn-secondary" onClick={handleDisconnectWallet}>
                  Disconnect
                </button>
              )}
            </div>

            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Track Your Crypto Portfolio Like a <span className="gradient-text">Pro</span>
            </h1>
            <p className="hero-subtitle">
              Advanced analytics, real-time tracking, and comprehensive insights for all your crypto wallets across multiple blockchains.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary btn-large" onClick={handleGetStarted}>
                <Wallet size={20} />
                Get Started Free
              </button>
              <button className="btn-secondary btn-large" onClick={handleViewDocs}>
                View Documentation
              </button>
            </div>

            {/* Stats */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">Everything you need to manage your crypto portfolio</p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="analytics-section">
        <div className="container">
          <h2 className="section-title">Portfolio Analytics</h2>
          <p className="section-subtitle">Real-time insights into your crypto performance</p>

          <div className="analytics-dashboard">
            <div className="dashboard-header">
              <div className="tabs">
                <button 
                  className={`tab ${activeTab === 'holdings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('holdings')}
                >
                  Holdings
                </button>
                <button 
                  className={`tab ${activeTab === 'performance' ? 'active' : ''}`}
                  onClick={() => setActiveTab('performance')}
                >
                  Performance
                </button>
                <button 
                  className={`tab ${activeTab === 'transactions' ? 'active' : ''}`}
                  onClick={() => setActiveTab('transactions')}
                >
                  Transactions
                </button>
              </div>
              <button className="btn-secondary" onClick={handleUpgradeToPremium}>
                Upgrade to Premium
              </button>
            </div>

            <div className="chart-container">
              <div className="chart-header">
                <div>
                  <div className="portfolio-value">$82,450.32</div>
                  <div className="portfolio-change positive">+$12,340.50 (17.6%) ↗</div>
                </div>
                <div className="time-filters">
                  <button className="time-btn">24H</button>
                  <button className="time-btn">7D</button>
                  <button className="time-btn active">1M</button>
                  <button className="time-btn">3M</button>
                  <button className="time-btn">1Y</button>
                  <button className="time-btn">ALL</button>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="name" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#06b6d4" 
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="holdings-grid">
              <div className="holding-card">
                <div className="holding-info">
                  <div className="holding-name">
                    <div className="coin-icon">BTC</div>
                    <div>
                      <div className="coin-name">Bitcoin</div>
                      <div className="coin-symbol">BTC</div>
                    </div>
                  </div>
                  <div className="holding-value">
                    <div className="amount">2.45 BTC</div>
                    <div className="usd-value">$52,340.50</div>
                  </div>
                  <div className="holding-change positive">+15.6%</div>
                </div>
              </div>

              <div className="holding-card">
                <div className="holding-info">
                  <div className="holding-name">
                    <div className="coin-icon">ETH</div>
                    <div>
                      <div className="coin-name">Ethereum</div>
                      <div className="coin-symbol">ETH</div>
                    </div>
                  </div>
                  <div className="holding-value">
                    <div className="amount">12.8 ETH</div>
                    <div className="usd-value">$24,120.80</div>
                  </div>
                  <div className="holding-change positive">+22.3%</div>
                </div>
              </div>

              <div className="holding-card">
                <div className="holding-info">
                  <div className="holding-name">
                    <div className="coin-icon">SOL</div>
                    <div>
                      <div className="coin-name">Solana</div>
                      <div className="coin-symbol">SOL</div>
                    </div>
                  </div>
                  <div className="holding-value">
                    <div className="amount">156 SOL</div>
                    <div className="usd-value">$5,989.02</div>
                  </div>
                  <div className="holding-change negative">-8.2%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" className="leaderboard-section">
        <div className="container">
          <h2 className="section-title">Top Traders Leaderboard</h2>
          <p className="section-subtitle">See how you rank against the best crypto traders</p>

          <div className="leaderboard-table">
            <div className="table-header">
              <div>Rank</div>
              <div>Address</div>
              <div>PnL (30d)</div>
              <div>Win Rate</div>
              <div>Trades</div>
              <div>Badge</div>
              <div>Action</div>
            </div>

            {leaderboardData.map((trader) => (
              <div key={trader.rank} className="table-row">
                <div className="rank">
                  {trader.rank <= 3 ? (
                    <span className={'medal medal-' + trader.rank}>{trader.rank}</span>
                  ) : (
                    <span>#{trader.rank}</span>
                  )}
                </div>
                <div className="address">{trader.address}</div>
                <div className="pnl positive">{trader.pnl}</div>
                <div className="win-rate">{trader.winRate}</div>
                <div className="trades">{trader.trades}</div>
                <div>
                  <span className={`badge badge-${trader.badge.toLowerCase()}`}>
                    {trader.badge}
                  </span>
                </div>
                <div>
                  <button 
                    className="btn-small" 
                    onClick={() => handleViewOnExplorer(trader.address)}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know about Azyr Wallet</p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`faq-icon ${expandedFaq === index ? 'rotated' : ''}`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Take Control of Your Crypto?</h2>
            <p>Join thousands of traders using Azyr Wallet to track and optimize their portfolios</p>
            <div className="cta-buttons">
              <button className="btn-primary btn-large" onClick={handleGetStarted}>
                <Wallet size={20} />
                Connect Your Wallet
              </button>
              <button className="btn-secondary btn-large" onClick={handleJoinCommunity}>
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src={logo} alt="Azyr Wallet Logo" className="logo-image" />
                <span>AZYR WALLET</span>
              </div>
              <p>Advanced crypto portfolio tracking and analytics platform.</p>
            </div>

            <div className="footer-section">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#analytics">Analytics</a>
              <a href="#leaderboard">Leaderboard</a>
              <a href="#pricing">Pricing</a>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <a href="#docs">Documentation</a>
              <a href="#api">API</a>
              <a href="#blog">Blog</a>
              <a href="#support">Support</a>
            </div>

            <div className="footer-section">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#careers">Careers</a>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Azyr Wallet. All rights reserved.</p>
            <div className="social-links">
              <a href="#twitter">Twitter</a>
              <a href="#discord">Discord</a>
              <a href="#telegram">Telegram</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Wallet Modal */}
      {showWalletModal && (
        <div className="modal-overlay" onClick={() => setShowWalletModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Connect Your Wallet</h3>
              <button className="modal-close" onClick={() => setShowWalletModal(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="modal-body">
              <p>Enter your wallet address to start tracking your portfolio:</p>
              <input
                type="text"
                placeholder="0x..."
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="wallet-input"
              />

              <div className="wallet-options">
                <button className="wallet-option">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask" />
                  MetaMask
                </button>
                <button className="wallet-option">
                  <Wallet size={24} />
                  WalletConnect
                </button>
                <button className="wallet-option">
                  <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Phantom" />
                  Phantom
                </button>
              </div>

              <button className="btn-primary btn-full" onClick={handleConnectWallet}>
                Connect Wallet
              </button>

              <p className="modal-note">
                We never store your private keys. Read-only access only.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;