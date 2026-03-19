export function AboutSection() {
    return (
        <section className="about-section" id="about">
            <div className="about-grid">
                <div className="about-content">
                    <h2 className="section-title">A Arte da <span className="text-accent">Massa</span></h2>
                    <p className="about-text">
                        Nossa jornada começou com um desejo simples: trazer de volta o sabor autêntico e o tempo necessário que produtos de verdade exigem.
                    </p>
                    <p className="about-text">
                        Na PanPizz, nossos pães passam por incríveis <strong>36 horas de fermentação natural</strong>. Nossas pizzas utilizam exclusivas farinhas italianas de moagem em pedra e molho de tomates San Marzano colhidos no ápice da maturidade.
                    </p>
                    <div className="about-badges">
                        <div className="about-badge">
                            <span className="badge-number">100%</span>
                            <span className="badge-label">Fermentação Natural</span>
                        </div>
                        <div className="about-badge">
                            <span className="badge-number">0</span>
                            <span className="badge-label">Conservantes</span>
                        </div>
                        <div className="about-badge">
                            <span className="badge-number">400°</span>
                            <span className="badge-label">Forno a Lenha Exclusivo</span>
                        </div>
                    </div>
                </div>
                <div className="about-image-wrapper">
                    <div className="about-image-frame glass animate-slide-up-delay">
                        {/* Como não temos uma imagem gerada para o "forno", vamos usar um placeholder premium linear, ou a imagem da pizza cortada para dar um estilo */}
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #15151a 0%, #2a2a35 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'rgba(255,255,255,0.1)', fontFamily: 'var(--font-heading)', letterSpacing: '2px', fontWeight: 'bold' }}>
                            PAN<span>PIZZ</span> ARTISAN
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
