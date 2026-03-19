export function Hero() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" style={{
            backgroundImage: `linear-gradient(to right, rgba(13, 13, 15, 0.9) 0%, rgba(13, 13, 15, 0.6) 50%, rgba(13, 13, 15, 0.2) 100%), url('/hero-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="hero-content">
                <h1 className="hero-title animate-slide-up">Sua experiência <span className="text-accent">premium</span> em padaria e pizzaria.</h1>
                <p className="hero-subtitle animate-slide-up-delay">Pães artesanais pela manhã, pizzas perfeitas à noite. Tudo num só lugar com ingredientes selecionados.</p>
                <div className="hero-actions animate-slide-up-delay-2">
                    <button className="btn-primary" onClick={() => scrollToSection('menu')} style={{ marginRight: '16px', fontSize: '1.1rem', padding: '16px 32px' }}>Fazer Pedido Agora</button>
                    <button className="nav-btn" onClick={() => scrollToSection('menu')} style={{ fontSize: '1.1rem' }}>Ver Cardápio</button>
                </div>
            </div>
        </section>
    );
}
