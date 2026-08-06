// Base de dados extraída e consolidada diretamente da planilha TORQUATO.ORG
const initialData = [
    // 1.0 GOVERNANÇA E PLANEJAMENTO
    { "id": 1, "category": "🟩 1.0 GOVERNANÇA E PLANEJAMENTO", "name": "Consultoria estratégica", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": true, "unit": "Hora", "unit_price": 500.0, "qty": 2.0, "description": "Planejamento e definição da estratégia de acessibilidade para o evento." },
    { "id": 2, "category": "🟩 1.0 GOVERNANÇA E PLANEJAMENTO", "name": "Diagnóstico e planejamento", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": true, "unit": "Hora", "unit_price": 500.0, "qty": 5.0, "description": "Levantamento técnico com recomendações e plano de ação para o evento." },
    { "id": 3, "category": "🟩 1.0 GOVERNANÇA E PLANEJAMENTO", "name": "Definição do orçamento e da Cota Acessibilidade", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Hora", "unit_price": 500.0, "qty": 0.0, "description": "Estima investimentos necessários para implementar medidas de acessibilidade." },
    { "id": 4, "category": "🟩 1.0 GOVERNANÇA E PLANEJAMENTO", "name": "Coordenação geral", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Hora", "unit_price": 500.0, "qty": 0.0, "description": "Gestão e acompanhamento da execução dos serviços contratados." },
    { "id": 5, "category": "🟩 1.0 GOVERNANÇA E PLANEJAMENTO", "name": "Definição de fornecedores", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Hora", "unit_price": 500.0, "qty": 0.0, "description": "Critérios para contratação e homologação de fornecedores." },

    // 2.0 TREINAMENTO E CAPACITAÇÃO
    { "id": 6, "category": "🟩 2.0 TREINAMENTO E CAPACITAÇÃO", "name": "Capacitação de gestores", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": true, "unit": "Hora", "unit_price": 500.0, "qty": 1.0, "description": "Treinamento especializado para liderança e gestores." },
    { "id": 7, "category": "🟩 2.0 TREINAMENTO E CAPACITAÇÃO", "name": "Treinamento da equipe operacional", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 500.0, "qty": 0.0, "description": "Capacitação prática das equipes de apoio do evento." },

    // 3.0 COMUNICAÇÃO E DIVULGAÇÃO
    { "id": 8, "category": "🟩 3.0 COMUNICAÇÃO E DIVULGAÇÃO", "name": "Designer gráfico", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": true, "unit": "Hora", "unit_price": 180.0, "qty": 2.0, "description": "Desenvolvimento de peças gráficas e materiais de comunicação." },
    { "id": 9, "category": "🟩 3.0 COMUNICAÇÃO E DIVULGAÇÃO", "name": "Material acessível e em Braille (criação)", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 220.0, "qty": 0.0, "description": "" },
    { "id": 10, "category": "🟩 3.0 COMUNICAÇÃO E DIVULGAÇÃO", "name": "Material acessível e em Braille (produção)", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 220.0, "qty": 0.0, "description": "" },
    { "id": 11, "category": "🟩 3.0 COMUNICAÇÃO E DIVULGAÇÃO", "name": "Site acessível (criação e produção)", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Hora", "unit_price": 260.0, "qty": 0.0, "description": "" },
    { "id": 12, "category": "🟩 3.0 COMUNICAÇÃO E DIVULGAÇÃO", "name": "Certificação digital para sites", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 200.0, "qty": 0.0, "description": "" },
    { "id": 13, "category": "🟩 3.0 COMUNICAÇÃO E DIVULGAÇÃO", "name": "Aplicativo acessível (criação e produção)", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 260.0, "qty": 0.0, "description": "" },
    { "id": 14, "category": "🟩 3.0 COMUNICAÇÃO E DIVULGAÇÃO", "name": "Linguagem simples", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 180.0, "qty": 0.0, "description": "" },
    { "id": 15, "category": "🟩 3.0 COMUNICAÇÃO E DIVULGAÇÃO", "name": "Copyright", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 180.0, "qty": 0.0, "description": "" },
    { "id": 16, "category": "🟩 3.0 COMUNICAÇÃO E DIVULGAÇÃO", "name": "Campanha online e redes sociais (criação)", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 180.0, "qty": 0.0, "description": "" },
    { "id": 17, "category": "🟩 3.0 COMUNICAÇÃO E DIVULGAÇÃO", "name": "Impulsionamentos", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 150.0, "qty": 0.0, "description": "" },
    { "id": 18, "category": "🟩 3.0 COMUNICAÇÃO E DIVULGAÇÃO", "name": "Assessoria de imprensa", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 200.0, "qty": 0.0, "description": "" },
    { "id": 19, "category": "🟩 3.0 COMUNICAÇÃO E DIVULGAÇÃO", "name": "Produção de vídeos acessíveis", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 250.0, "qty": 0.0, "description": "" },
    { "id": 20, "category": "🟩 3.0 COMUNICAÇÃO E DIVULGAÇÃO", "name": "E-mail marketing", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 150.0, "qty": 0.0, "description": "" },
    { "id": 21, "category": "🟩 3.0 COMUNICAÇÃO E DIVULGAÇÃO", "name": "Plataforma de inscrições acessível", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 220.0, "qty": 0.0, "description": "" },
    { "id": 22, "category": "🟩 3.0 COMUNICAÇÃO E DIVULGAÇÃO", "name": "Busca ativa de públicos-alvo", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 180.0, "qty": 0.0, "description": "" },

    // 4.0 INFRAESTRUTURA FÍSICA
    { "id": 23, "category": "🟩 4.0 INFRAESTRUTURA FÍSICA", "name": "Cenografia e ambientação (criação)", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": true, "unit": "Hora", "unit_price": 250.0, "qty": 5.0, "description": "" },
    { "id": 24, "category": "🟩 4.0 INFRAESTRUTURA FÍSICA", "name": "Cenografia e ambientação (produção)", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 250.0, "qty": 0.0, "description": "" },
    { "id": 25, "category": "🟩 4.0 INFRAESTRUTURA FÍSICA", "name": "Rampa", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Unidade", "unit_price": 2500.0, "qty": 0.0, "description": "Instalação de rampas temporárias para acessibilidade." },
    { "id": 26, "category": "🟩 4.0 INFRAESTRUTURA FÍSICA", "name": "Plataforma elevatória", "badge": "PREMIUM", "badge_class": "premium", "selected": false, "unit": "Diária", "unit_price": 4500.0, "qty": 0.0, "description": "Equipamento para acesso entre diferentes níveis." },
    { "id": 27, "category": "🟩 4.0 INFRAESTRUTURA FÍSICA", "name": "Piso tátil", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Metro", "unit_price": 120.0, "qty": 0.0, "description": "Sinalização tátil de alerta e direcionamento." },
    { "id": 28, "category": "🟩 4.0 INFRAESTRUTURA FÍSICA", "name": "Mapa tátil", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Unidade", "unit_price": 850.0, "qty": 0.0, "description": "Representação tátil e visual do layout do espaço." },
    { "id": 29, "category": "🟩 4.0 INFRAESTRUTURA FÍSICA", "name": "Banheiro acessível", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Unidade", "unit_price": 1500.0, "qty": 0.0, "description": "Instalação ou adequação de sanita e suporte adaptado." },
    { "id": 30, "category": "🟩 4.0 INFRAESTRUTURA FÍSICA", "name": "Área reservada", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Unidade", "unit_price": 600.0, "qty": 0.0, "description": "Espaço exclusivo e demarcado para PCDs." },
    { "id": 31, "category": "🟩 4.0 INFRAESTRUTURA FÍSICA", "name": "Sinalização", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Unidade", "unit_price": 350.0, "qty": 0.0, "description": "Sinalização visual acessível e de rota livre." },

    // 5.0 TRANSPORTE E MOBILIDADE
    { "id": 32, "category": "🟩 5.0 TRANSPORTE E MOBILIDADE", "name": "Transporte acessível", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": true, "unit": "Diária", "unit_price": 1600.0, "qty": 3.0, "description": "Veículos adaptados para deslocamento do público e equipe." },
    { "id": 33, "category": "🟩 5.0 TRANSPORTE E MOBILIDADE", "name": "Rota acessível", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Hora", "unit_price": 300.0, "qty": 0.0, "description": "Mapeamento e sinalização do percurso acessível." },
    { "id": 34, "category": "🟩 5.0 TRANSPORTE E MOBILIDADE", "name": "Estacionamento prioritário", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Unidade", "unit_price": 400.0, "qty": 0.0, "description": "Reserva e controle de vagas exclusivas." },

    // 6.0 ATENDIMENTO E HOSPITALIDADE
    { "id": 35, "category": "🟩 6.0 ATENDIMENTO E HOSPITALIDADE", "name": "Recepcionista inclusiva", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": true, "unit": "Diária", "unit_price": 550.0, "qty": 2.0, "description": "Atendimento receptivo com preparo inclusivo." },
    { "id": 36, "category": "🟩 6.0 ATENDIMENTO E HOSPITALIDADE", "name": "Assistente de acessibilidade", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Diária", "unit_price": 500.0, "qty": 0.0, "description": "Apoio direto às pessoas com deficiência no local." },
    { "id": 37, "category": "🟩 6.0 ATENDIMENTO E HOSPITALIDADE", "name": "Central de Acessibilidade", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Diária", "unit_price": 1200.0, "qty": 0.0, "description": "Ponto focal de atendimento e apoio ao público." },
    { "id": 38, "category": "🟩 6.0 ATENDIMENTO E HOSPITALIDADE", "name": "Empréstimo/aluguel de cadeira de rodas", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Diária", "unit_price": 180.0, "qty": 0.0, "description": "" },
    { "id": 39, "category": "🟩 6.0 ATENDIMENTO E HOSPITALIDADE", "name": "Empréstimo de abafadores de som", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Diária", "unit_price": 80.0, "qty": 0.0, "description": "Equipamento para regulação sensorial." },
    { "id": 40, "category": "🟩 6.0 ATENDIMENTO E HOSPITALIDADE", "name": "Sala Sensorial / Espaço de descompressão", "badge": "PREMIUM", "badge_class": "premium", "selected": false, "unit": "Diária", "unit_price": 2500.0, "qty": 0.0, "description": "Espaço reservado para autorregulação sensorial." },
    { "id": 41, "category": "🟩 6.0 ATENDIMENTO E HOSPITALIDADE", "name": "Oficina de concertos", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Diária", "unit_price": 800.0, "qty": 0.0, "description": "Suporte e reparos de órteses/próteses e cadeiras." },
    { "id": 42, "category": "🟩 6.0 ATENDIMENTO E HOSPITALIDADE", "name": "Aplicativo de atendimento em Libras", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Diária", "unit_price": 600.0, "qty": 0.0, "description": "" },
    { "id": 43, "category": "🟩 6.0 ATENDIMENTO E HOSPITALIDADE", "name": "Aplicativo de descrição de imagens", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Diária", "unit_price": 600.0, "qty": 0.0, "description": "" },

    // 7.0 CONTEÚDO E EXPERIÊNCIA
    { "id": 44, "category": "🟩 7.0 CONTEÚDO E EXPERIÊNCIA", "name": "Indicação de palestrantes e debatedores", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 300.0, "qty": 0.0, "description": "" },
    { "id": 45, "category": "🟩 7.0 CONTEÚDO E EXPERIÊNCIA", "name": "Contratação de palestrantes e debatedores", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Unidade", "unit_price": 3500.0, "qty": 0.0, "description": "" },
    { "id": 46, "category": "🟩 7.0 CONTEÚDO E EXPERIÊNCIA", "name": "Show inclusivo", "badge": "PREMIUM", "badge_class": "premium", "selected": false, "unit": "Unidade", "unit_price": 8000.0, "qty": 0.0, "description": "" },
    { "id": 47, "category": "🟩 7.0 CONTEÚDO E EXPERIÊNCIA", "name": "Ativação inclusiva", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Unidade", "unit_price": 2000.0, "qty": 0.0, "description": "" },
    { "id": 48, "category": "🟩 7.0 CONTEÚDO E EXPERIÊNCIA", "name": "Aplicativo de acessibilidade comunicacional", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Diária", "unit_price": 1000.0, "qty": 0.0, "description": "" },
    { "id": 49, "category": "🟩 7.0 CONTEÚDO E EXPERIÊNCIA", "name": "Conexão de internet", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Diária", "unit_price": 1500.0, "qty": 0.0, "description": "" },
    { "id": 50, "category": "🟩 7.0 CONTEÚDO E EXPERIÊNCIA", "name": "Captação e transmissão online", "badge": "PREMIUM", "badge_class": "premium", "selected": false, "unit": "Diária", "unit_price": 4500.0, "qty": 0.0, "description": "" },
    { "id": 51, "category": "🟩 7.0 CONTEÚDO E EXPERIÊNCIA", "name": "Intérprete de Libras", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Hora", "unit_price": 250.0, "qty": 0.0, "description": "" },
    { "id": 52, "category": "🟩 7.0 CONTEÚDO E EXPERIÊNCIA", "name": "Audiodescrição", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Hora", "unit_price": 300.0, "qty": 0.0, "description": "" },
    { "id": 53, "category": "🟩 7.0 CONTEÚDO E EXPERIÊNCIA", "name": "Legendagem", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Hora", "unit_price": 200.0, "qty": 0.0, "description": "" },
    { "id": 54, "category": "🟩 7.0 CONTEÚDO E EXPERIÊNCIA", "name": "Guia-intérprete", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 250.0, "qty": 0.0, "description": "" },
    { "id": 55, "category": "🟩 7.0 CONTEÚDO E EXPERIÊNCIA", "name": "Showcase de acessibilidade e tecnologias assistivas", "badge": "PREMIUM", "badge_class": "premium", "selected": false, "unit": "Diária", "unit_price": 5000.0, "qty": 0.0, "description": "" },

    // 8.0 OPERAÇÃO E SEGURANÇA
    { "id": 56, "category": "🟩 8.0 OPERAÇÃO E SEGURANÇA", "name": "Locação de espaço", "badge": "PREMIUM", "badge_class": "premium", "selected": true, "unit": "Diária", "unit_price": 25000.0, "qty": 3.0, "description": "Contratação e reserva do espaço do evento." },
    { "id": 57, "category": "🟩 8.0 OPERAÇÃO E SEGURANÇA", "name": "Produtor de acessibilidade", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Diária", "unit_price": 1200.0, "qty": 0.0, "description": "" },
    { "id": 58, "category": "🟩 8.0 OPERAÇÃO E SEGURANÇA", "name": "Brigadista", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Diária", "unit_price": 400.0, "qty": 0.0, "description": "" },
    { "id": 59, "category": "🟩 8.0 OPERAÇÃO E SEGURANÇA", "name": "Plano de evacuação", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Unidade", "unit_price": 3000.0, "qty": 0.0, "description": "" },
    { "id": 60, "category": "🟩 8.0 OPERAÇÃO E SEGURANÇA", "name": "Ambulatório", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Diária", "unit_price": 2000.0, "qty": 0.0, "description": "" },
    { "id": 61, "category": "🟩 8.0 OPERAÇÃO E SEGURANÇA", "name": "Ambulância", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Diária", "unit_price": 2500.0, "qty": 0.0, "description": "" },
    { "id": 62, "category": "🟩 8.0 OPERAÇÃO E SEGURANÇA", "name": "Comunicação de emergência", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Diária", "unit_price": 800.0, "qty": 0.0, "description": "" },
    { "id": 63, "category": "🟩 8.0 OPERAÇÃO E SEGURANÇA", "name": "Segurança", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Diária", "unit_price": 350.0, "qty": 0.0, "description": "" },
    { "id": 64, "category": "🟩 8.0 OPERAÇÃO E SEGURANÇA", "name": "Limpeza", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Diária", "unit_price": 300.0, "qty": 0.0, "description": "" },
    { "id": 65, "category": "🟩 8.0 OPERAÇÃO E SEGURANÇA", "name": "Troféus", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Unidade", "unit_price": 250.0, "qty": 0.0, "description": "" },
    { "id": 66, "category": "🟩 8.0 OPERAÇÃO E SEGURANÇA", "name": "Certificado de participação", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Unidade", "unit_price": 15.0, "qty": 0.0, "description": "" },
    { "id": 67, "category": "🟩 8.0 OPERAÇÃO E SEGURANÇA", "name": "Alimentação", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Diária", "unit_price": 80.0, "qty": 0.0, "description": "" },
    { "id": 68, "category": "🟩 8.0 OPERAÇÃO E SEGURANÇA", "name": "Coffee Break", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Pessoa", "unit_price": 45.0, "qty": 0.0, "description": "" },
    { "id": 69, "category": "🟩 8.0 OPERAÇÃO E SEGURANÇA", "name": "Brindes e kits promocionais", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Unidade", "unit_price": 35.0, "qty": 0.0, "description": "" },
    { "id": 70, "category": "🟩 8.0 OPERAÇÃO E SEGURANÇA", "name": "Captação e edição de vídeo", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Diária", "unit_price": 2200.0, "qty": 0.0, "description": "" },
    { "id": 71, "category": "🟩 8.0 OPERAÇÃO E SEGURANÇA", "name": "Fotógrafo", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Diária", "unit_price": 1200.0, "qty": 0.0, "description": "" },

    // 9.0 AVALIAÇÃO E LEGADO
    { "id": 72, "category": "🟨 9.0 AVALIAÇÃO E LEGADO", "name": "Auditoria", "badge": "PREMIUM", "badge_class": "premium", "selected": true, "unit": "Hora", "unit_price": 420.0, "qty": 3.0, "description": "Avaliação técnica final de conformidade do evento." },
    { "id": 73, "category": "🟨 9.0 AVALIAÇÃO E LEGADO", "name": "Indicadores de acessibilidade", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 350.0, "qty": 0.0, "description": "" },
    { "id": 74, "category": "🟨 9.0 AVALIAÇÃO E LEGADO", "name": "Pesquisa", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 280.0, "qty": 0.0, "description": "" },
    { "id": 75, "category": "🟨 9.0 AVALIAÇÃO E LEGADO", "name": "Relatório final", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": false, "unit": "Hora", "unit_price": 400.0, "qty": 0.0, "description": "" },

    // 10.0 MONETIZAÇÃO E PATROCÍNIO
    { "id": 76, "category": "🟩 10.0 MONETIZAÇÃO E PATROCÍNIO", "name": "Consultor de captação de patrocínio", "badge": "ESSENCIAL", "badge_class": "essencial", "selected": true, "unit": "Hora", "unit_price": 450.0, "qty": 4.0, "description": "Prospecção e negociação com patrocinadores." },
    { "id": 77, "category": "🟩 10.0 MONETIZAÇÃO E PATROCÍNIO", "name": "Reunião de apresentação do projeto", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 350.0, "qty": 0.0, "description": "" },
    { "id": 78, "category": "🟩 10.0 MONETIZAÇÃO E PATROCÍNIO", "name": "Reunião de apresentação dos resultados", "badge": "RECOMENDADO", "badge_class": "recomendado", "selected": false, "unit": "Hora", "unit_price": 350.0, "qty": 0.0, "description": "" }
];

// Clonagem inicial dos dados com garantia de tipos
let servicesData = JSON.parse(JSON.stringify(initialData)).map(item => {
    return {
        ...item,
        selected: false,
        qty: 0,
        unit_price: Number(item.unit_price) || 0
    };
});

let activeFilter = 'all';
let searchQuery = '';

// Utilitário de Formatação Monetária
const formatCurrency = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val || 0);

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    calculateTotals();
    setupEventListeners();
});

function setupEventListeners() {
    // Filtros por Badge/Chip
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            activeFilter = e.target.dataset.filter;
            renderServices();
        });
    });

    // Filtro por Busca
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderServices();
        });
    }

    // Recálculo ao alterar inputs financeiros gerais
    ['comissao-input', 'outras-despesas-input', 'impostos-input'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', calculateTotals);
    });

    // Botão Limpar / Reset
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            servicesData.forEach(item => {
                item.selected = false;
                item.qty = 0;
            });
            renderServices();
            calculateTotals();
        });
    }
}

function renderServices() {
    const container = document.getElementById('services-container');
    if (!container) return;
    
    container.innerHTML = '';

    // Filtragem dos serviços por categoria/busca
    const filteredData = servicesData.filter(item => {
        const matchesFilter = activeFilter === 'all' || item.badge === activeFilter;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery) ||
            item.category.toLowerCase().includes(searchQuery);
        return matchesFilter && matchesSearch;
    });

    // Agrupamento por Categoria
    const categories = [...new Set(filteredData.map(item => item.category))];

    if (categories.length === 0) {
        container.innerHTML = '<div class="card"><p style="text-align:center; color: var(--text-secondary);">Nenhum serviço encontrado.</p></div>';
        return;
    }

    categories.forEach(category => {
        const catCard = document.createElement('div');
        catCard.className = 'card';

        const catHeader = document.createElement('div');
        catHeader.className = 'category-header';
        catHeader.innerHTML = `<strong>${category}</strong>`;
        catCard.appendChild(catHeader);

        const itemsInCat = filteredData.filter(item => item.category === category);

        itemsInCat.forEach(item => {
            const row = document.createElement('div');
            row.className = 'item-row';
            
            // Se a quantidade for 0, deixa a string vazia para exibir o placeholder "0"
            const qtyDisplayValue = item.qty > 0 ? item.qty : '';

            row.innerHTML = `
                <div class="item-check">
                    <input type="checkbox" id="chk-${item.id}" ${item.selected ? 'checked' : ''}>
                </div>
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    ${item.description ? `<div class="item-desc">${item.description}</div>` : ''}
                </div>
                <div>
                    <span class="badge badge-${item.badge_class}">${item.badge}</span>
                </div>
                <div class="item-unit-price">${formatCurrency(item.unit_price)} / ${item.unit}</div>
                <div>
                    <input type="number" 
                           class="qty-input" 
                           id="qty-${item.id}" 
                           value="${qtyDisplayValue}" 
                           placeholder="0" 
                           min="0" 
                           onfocus="if(this.value === '0') this.value = '';" 
                           onblur="if(this.value === '') this.value = '';">
                </div>
                <div class="item-subtotal" id="subtotal-${item.id}">
                    ${formatCurrency(item.selected ? item.unit_price * item.qty : 0)}
                </div>
            `;

            // Atribuição pontual de eventos para não recriar a DOM no meio da digitação
            const checkbox = row.querySelector(`#chk-${item.id}`);
            const qtyInput = row.querySelector(`#qty-${item.id}`);

            checkbox.addEventListener('change', (e) => toggleItem(item.id, e.target.checked));
            qtyInput.addEventListener('input', (e) => updateQty(item.id, e.target.value));

            catCard.appendChild(row);
        });

        container.appendChild(catCard);
    });
}

function toggleItem(id, isChecked) {
    const item = servicesData.find(i => i.id === id);
    if (item) {
        item.selected = isChecked;
        if (isChecked && item.qty === 0) item.qty = 1;
        if (!isChecked) item.qty = 0;

        // Atualização cirúrgica na interface sem perdas de foco
        const qtyInput = document.getElementById(`qty-${id}`);
        const subtotalEl = document.getElementById(`subtotal-${id}`);
        
        if (qtyInput) qtyInput.value = item.qty > 0 ? item.qty : '';
        if (subtotalEl) subtotalEl.textContent = formatCurrency(item.selected ? item.unit_price * item.qty : 0);

        calculateTotals();
    }
}

function updateQty(id, qtyValue) {
    const qty = Math.max(0, parseFloat(qtyValue) || 0);
    const item = servicesData.find(i => i.id === id);
    
    if (item) {
        item.qty = qty;
        item.selected = qty > 0;

        const chkInput = document.getElementById(`chk-${id}`);
        const subtotalEl = document.getElementById(`subtotal-${id}`);

        if (chkInput) chkInput.checked = item.selected;
        if (subtotalEl) subtotalEl.textContent = formatCurrency(item.selected ? item.unit_price * qty : 0);

        calculateTotals();
    }
}

function calculateTotals() {
    let essenciais = 0, recomendados = 0, patrocinaveis = 0, premium = 0;
    let pontosObtidos = 0;
    let pontosTotais = 0;

    servicesData.forEach(item => {
        const subtotal = item.unit_price * item.qty;

        // 1. Somatório de Preços por Categoria
        if (item.selected && item.qty > 0) {
            const badgeUpper = (item.badge || '').toUpperCase();
            if (badgeUpper === 'ESSENCIAL') essenciais += subtotal;
            else if (badgeUpper === 'RECOMENDADO') recomendados += subtotal;
            else if (badgeUpper === 'PATROCINÁVEL') patrocinaveis += subtotal;
            else if (badgeUpper === 'PREMIUM') premium += subtotal;
        }

        // 2. Cálculo Ponderado da Porcentagem de Acessibilidade
        const badgeUpper = (item.badge || '').toUpperCase();
        let peso = 0;

        if (badgeUpper === 'ESSENCIAL') peso = 1;
        else if (badgeUpper === 'RECOMENDADO') peso = 2;
        else if (badgeUpper === 'PREMIUM') peso = 3;

        if (peso > 0) {
            pontosTotais += peso; // Soma os pesos de todo o catálogo disponível
            if (item.selected && item.qty > 0) {
                pontosObtidos += peso; // Soma apenas o peso dos selecionados
            }
        }
    });

    const subtotalGeral = essenciais + recomendados + patrocinaveis + premium;

    // Leitura das taxas
    const comissaoPct = parseFloat(document.getElementById('comissao-input')?.value) || 0;
    const outrasDespesas = parseFloat(document.getElementById('outras-despesas-input')?.value) || 0;
    const impostosPct = parseFloat(document.getElementById('impostos-input')?.value) || 0;

    const valorComissao = subtotalGeral * (comissaoPct / 100);
    const valorImpostos = subtotalGeral * (impostosPct / 100);
    const valorFinal = subtotalGeral + valorComissao + outrasDespesas + valorImpostos;

    // Utilitário interno para evitar erros caso faltem IDs na tela
    const setElementText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    // Renderização dos resultados na UI
    setElementText('total-essenciais', formatCurrency(essenciais));
    setElementText('total-recomendados', formatCurrency(recomendados));
    setElementText('total-patrocinaveis', formatCurrency(patrocinaveis));
    setElementText('total-premium', formatCurrency(premium));
    setElementText('subtotal-geral', formatCurrency(subtotalGeral));

    setElementText('comissao-valor', formatCurrency(valorComissao));
    setElementText('outras-despesas-valor', formatCurrency(outrasDespesas));
    setElementText('impostos-valor', formatCurrency(valorImpostos));

    setElementText('valor-final', formatCurrency(valorFinal));

    // Porcentagem Final (Pontos Selecionados ÷ Pontos Totais)
    const percentualAcessibilidade = pontosTotais > 0
        ? Math.round((pontosObtidos / pontosTotais) * 100)
        : 0;

    setElementText('accessibility-percentage', `${percentualAcessibilidade}%`);
}