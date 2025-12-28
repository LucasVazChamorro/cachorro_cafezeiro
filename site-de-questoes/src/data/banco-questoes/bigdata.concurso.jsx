export const questoesBigDataConcurso = [
    {
        id: "bbti-bigdata-001",
        numero: 1,
        banca: "CESGRANRIO",
        prova: "PETROBRAS",
        ano: 2018,
        tema: "Big Data",
        assunto: "Fundamentos — Velocidade (3 V's)",
        exibirNoNivelamento: true,

        enunciado: (
            <p>
                A principal definição de Big Data parte de três características, conhecidas como{" "}
                <strong>3 V do Big Data</strong>, a saber: velocidade, variedade e volume.
                O termo <strong>velocidade</strong> refere-se, principalmente, à
            </p>
        ),
        alternativas: [
            <>necessidade das aplicações de gerar respostas rapidamente, a partir de grandes massas de dados.</>,
            <>existência de um alto fluxo de dados na entrada.</>,
            <>necessidade de gerar aplicações rapidamente, em função da demanda do negócio.</>,
            <>importância da facilidade de manipular cubos de visualização de dados, rapidamente.</>,
            <>rapidez com que os dados se tornam inválidos com o tempo.</>,
        ],
        correta: "B",
        comentario: (
            <>
                <p className="mb-2">
                    No contexto do Big Data, o V de <strong>Velocidade</strong> está relacionado
                    à <strong>taxa de geração e entrada dos dados</strong>, ou seja,
                    ao alto fluxo com que os dados são produzidos e precisam ser processados.
                </p>

                <ul className="mb-0">
                    <li><strong>B (correta)</strong> → descreve exatamente o alto fluxo de dados na entrada.</li>
                    <li><strong>A</strong> → fala de tempo de resposta da aplicação (desempenho), não do conceito “velocidade” do Big Data.</li>
                    <li><strong>C</strong> → trata de velocidade de desenvolvimento, não de dados.</li>
                    <li><strong>D</strong> → distrator envolvendo “cubos” (mais ligado a DW/BI).</li>
                    <li><strong>E</strong> → fala de validade temporal; não é a definição clássica de velocidade no Big Data.</li>
                </ul>
            </>
        ),
    },

    {
        id: "bbti-bigdata-002",
        numero: 2,
        banca: "CESGRANRIO",
        prova: "BB",
        ano: 2023,
        tema: "Big Data",
        assunto: "Fundamentos — 3 V's",
        exibirNoNivelamento: true,

        enunciado: (
            <>
                <p>
                    Organizações modernas estão sujeitas a uma grande quantidade de dados,
                    principalmente se tratam com grandes quantidades de clientes. Muitas das demandas de
                    tecnologia da informação a que essas organizações estão submetidas passaram a ser
                    organizadas e tratadas dentro do conceito de Big Data.
                </p>
                <p className="mb-0">
                    Além do grande volume de dados, o Big Data, em sua definição original, considera
                    também a(s) seguinte(s) propriedade(s):
                </p>
            </>
        ),
        alternativas: [
            <>falta de qualidade, apenas</>,
            <>variedade, apenas</>,
            <>velocidade, apenas</>,
            <>variedade e velocidade</>,
            <>velocidade e falta de qualidade</>,
        ],
        correta: "D",
        comentario: (
            <>
                <p className="mb-2">
                    A definição original mais difundida de Big Data é baseada nos <strong>3 V’s</strong>:
                    <strong> Volume</strong>, <strong>Variedade</strong> e <strong>Velocidade</strong>.
                </p>

                <ul className="mb-0">
                    <li><strong>D (correta)</strong> → além de volume, considera variedade e velocidade.</li>
                    <li><strong>A/E</strong> → “falta de qualidade” é distrator; se aproxima de <strong>Veracidade</strong> (5 V’s), não dos 3 V’s originais.</li>
                    <li><strong>B/C</strong> → traz apenas um dos V’s; incompleto.</li>
                </ul>
            </>
        ),
    },

    {
        id: "bbti-bigdata-003",
        numero: 3,
        banca: "CESGRANRIO",
        prova: "TRANSPETRO",
        ano: 2023,
        tema: "Big Data",
        assunto: "Fundamentos — 5 V's",
        exibirNoNivelamento: true,

        enunciado: (
            <>
                <p>
                    O grande volume de dados gerados por sensores, máquinas e equipamentos na
                    Indústria 4.0 é chamado, em sistemas de informação, de <strong>Big Data</strong>.
                </p>
                <p className="mb-0">Esses atributos são:</p>
            </>
        ),
        alternativas: [
            <>Velocidade, Volume, Variedade, Veracidade, Valor</>,
            <>Velocidade, Volume, Variedade, Veracidade, Vigência</>,
            <>Velocidade, Volume, Variedade, Veracidade, Valor, Viabilidade</>,
            <>Velocidade, Volume, Variedade, Veracidade, Valor, Viabilidade, Vigência</>,
            <>Velocidade, Variedade, Veracidade, Valor, Viabilidade, Vigência</>,
        ],
        correta: "A",
        comentario: (
            <>
                <p className="mb-2">
                    A abordagem mais difundida do Big Data considera os <strong>5 V’s</strong>:
                    <strong> Volume</strong>, <strong>Velocidade</strong>, <strong>Variedade</strong>,
                    <strong> Veracidade</strong> e <strong>Valor</strong>.
                </p>

                <ul className="mb-0">
                    <li><strong>A (correta)</strong> → lista exatamente os 5 V’s.</li>
                    <li><strong>B/C/D/E</strong> → incluem termos como <em>vigência</em> e <em>viabilidade</em> (distratores clássicos).</li>
                </ul>
            </>
        ),
    },

    {
        id: "bbti-bigdata-004",
        numero: 4,
        banca: "CESGRANRIO",
        prova: "PETROBRAS",
        ano: 2018,
        tema: "Big Data",
        assunto: "Complexidade das fontes",
        exibirNoNivelamento: true,

        enunciado: (
            <p className="mb-0">
                O termo Big Data é bastante conhecido pelos profissionais de tecnologia da informação.
                Uma característica inerente a esse conceito é a da
            </p>
        ),
        alternativas: [
            <>complexidade das suas fontes de informação, exigindo limpeza, integração e transformação.</>,
            <>estabilidade da taxa de geração desses dados.</>,
            <>heterogeneidade apenas de dados estruturados.</>,
            <>qualidade das fontes por padrões de retenção.</>,
            <>escalabilidade com alto valor granular.</>,
        ],
        correta: "A",
        comentario: (
            <>
                <p className="mb-2">
                    Big Data envolve <strong>variedade</strong> e <strong>heterogeneidade</strong> de fontes
                    (logs, sensores, redes sociais, imagens etc.), o que aumenta a complexidade e exige
                    <strong> limpeza</strong>, <strong>integração</strong> e <strong>transformação</strong>
                    antes da análise.
                </p>

                <ul className="mb-0">
                    <li><strong>A (correta)</strong> → descreve exatamente a complexidade das fontes e a necessidade de preparação.</li>
                    <li><strong>B</strong> → o oposto é mais comum: alta variabilidade/fluxo e não estabilidade.</li>
                    <li><strong>C</strong> → Big Data não é “apenas estruturado”; inclui semi e não estruturado.</li>
                    <li><strong>D/E</strong> → distratores; não são características clássicas.</li>
                </ul>
            </>
        ),
    },

    {
        id: "bbti-bigdata-005",
        numero: 5,
        banca: "CESGRANRIO",
        prova: "INNOVA",
        ano: 2012,
        tema: "Big Data",
        assunto: "Clusters",
        exibirNoNivelamento: true,

        enunciado: (
            <p className="mb-0">
                Os clusters de computadores podem ser vistos como dois ou mais computadores que
                trabalham de maneira conjunta para realizar algum processamento. Esses clusters
                apresentam a seguinte característica:
            </p>
        ),
        alternativas: [
            <>impossibilidade de balanceamento de carga.</>,
            <>necessidade de três computadores de controle.</>,
            <>controle distribuído baseado em hardware proprietário.</>,
            <>possibilidade de adicionar novos nós conforme a carga cresce.</>,
            <>redução da confiabilidade do sistema.</>,
        ],
        correta: "D",
        comentario: (
            <>
                <p className="mb-2">
                    Em Big Data, clusters permitem <strong>escalabilidade horizontal</strong>:
                    quando a carga cresce, adicionam-se novos nós (nodes) ao conjunto.
                </p>

                <ul className="mb-0">
                    <li><strong>D (correta)</strong> → traduz a ideia de escalar adicionando nós.</li>
                    <li><strong>A</strong> → clusters normalmente viabilizam <strong>balanceamento de carga</strong> (não impossibilitam).</li>
                    <li><strong>B</strong> → não existe “regra” de 3 computadores de controle.</li>
                    <li><strong>C</strong> → Big Data tende a usar hardware commodity (não proprietário).</li>
                    <li><strong>E</strong> → clusters costumam aumentar disponibilidade/robustez.</li>
                </ul>
            </>
        ),
    },

    {
        id: "bbti-bigdata-006",
        numero: 6,
        banca: "CESGRANRIO",
        prova: "BB",
        ano: 2018,
        tema: "Big Data",
        assunto: "MapReduce — Modelo teórico",
        exibirNoNivelamento: true,

        enunciado: (
            <>
                <p>
                    Um modelo teórico do <strong>MapReduce</strong> pode ser resumido em duas funções,
                    <strong> map</strong> e <strong>reduce</strong>.
                </p>
                <p className="mb-0">
                    Qual é o modelo correto para a função <strong>map</strong>?
                </p>
            </>
        ),
        alternativas: [
            <>map(v1) → list(k2, v2)</>,
            <>map(v1) → k2, list(v2)</>,
            <>map(k1, v1) → k2, list(v2)</>,
            <>map(k1, v1) → k2, v2</>,
            <>map(k1, v1) → list(k2, v2)</>,
        ],
        correta: "E",
        comentario: (
            <>
                <p className="mb-2">
                    A função <strong>map</strong> recebe <strong>(k1, v1)</strong> e produz
                    uma <strong>lista de pares (k2, v2)</strong> (ou seja, pode gerar vários pares
                    de saída para cada entrada).
                </p>

                <ul className="mb-0">
                    <li><strong>E (correta)</strong> → entrada (k1,v1) e saída como lista de (k2,v2).</li>
                    <li><strong>D</strong> → reduz para um único par (k2,v2), perdendo a ideia de lista.</li>
                    <li><strong>A/B</strong> → ignoram k1 (chave de entrada) e não representam bem o modelo.</li>
                    <li><strong>C</strong> → mistura estrutura; o padrão mais aceito é lista de pares (k2,v2).</li>
                </ul>
            </>
        ),
    },

    // ✅ NOVAS QUESTÕES (a partir daqui)

    {
        id: "bbti-bigdata-007",
        numero: 7,
        banca: "CESGRANRIO",
        prova: "BANCO DO BRASIL — Agente de Tecnologia",
        ano: 2023,
        tema: "Big Data",
        assunto: "Preparação de Dados — Outliers / Anomalias",
        exibirNoNivelamento: true,

        enunciado: (
            <>
                <p>
                    Um profissional de TI está trabalhando com um grande banco de dados (Big Data),
                    realizando uma análise prévia da base de dados, com o objetivo de identificar
                    anomalias ou resultados raros, de forma a tratá-los ou descartá-los para utilização.
                </p>
                <p className="mb-0">Esse profissional está realizando a seguinte tarefa:</p>
            </>
        ),
        alternativas: [
            <>Agrupamento dos dados</>,
            <>Análise de associações dos dados</>,
            <>Análise de segmentação dos dados</>,
            <>Análise de outliers (pontos fora da curva) ou detecção de desvios</>,
            <>Classificação dos dados e das anomalias</>,
        ],
        correta: "D",
        comentario: (
            <>
                <p className="mb-2">
                    O enunciado descreve a busca por <strong>anomalias</strong> e <strong>resultados raros</strong>,
                    que é exatamente a ideia de <strong>outliers</strong> (pontos fora do padrão) e sua
                    <strong> detecção</strong> na preparação de dados.
                </p>

                <ul className="mb-0">
                    <li><strong>D (correta)</strong> → detecção de desvios/outliers.</li>
                    <li><strong>A</strong> → agrupamento (clustering) busca grupos, não “raros/anomalias” diretamente.</li>
                    <li><strong>B</strong> → associações (regras) buscam relações do tipo “se… então…”.</li>
                    <li><strong>C</strong> → segmentação separa em segmentos, mas não foca necessariamente em anomalias.</li>
                    <li><strong>E</strong> → classificação exige rótulos/modelo; o texto fala de análise prévia para identificar raros.</li>
                </ul>
            </>
        ),
    },

    {
        id: "bbti-bigdata-008",
        numero: 8,
        banca: "CESGRANRIO",
        prova: "BANCO DO BRASIL — Agente de Tecnologia",
        ano: 2023,
        tema: "Big Data",
        assunto: "Preparação de Dados — Redução de Dimensionalidade (PCA)",
        exibirNoNivelamento: true,

        enunciado: (
            <>
                <p>
                    Ao fazer a preparação para analisar dados em um banco de dados típico de Big Data,
                    um profissional de TI percebeu que o número de atributos, ou colunas, era muito maior
                    do que poderia processar com a ferramenta de análise disponível, sendo necessário,
                    portanto, utilizar uma técnica de redução de dados para prepará-los para análise.
                </p>
                <p className="mb-0">Uma técnica indicada, nesse caso, é a</p>
            </>
        ),
        alternativas: [
            <>Amostragem Aleatória</>,
            <>Amostragem Estratificada</>,
            <>Análise de Componentes Principais</>,
            <>Deduplicação</>,
            <>Imputação</>,
        ],
        correta: "C",
        comentario: (
            <>
                <p className="mb-2">
                    O problema é de <strong>alta dimensionalidade</strong> (muitas colunas/atributos).
                    A técnica clássica para reduzir o número de variáveis mantendo informação relevante é a
                    <strong> PCA</strong> (Análise de Componentes Principais).
                </p>

                <ul className="mb-0">
                    <li><strong>C (correta)</strong> → reduz dimensionalidade (colunas) por componentes principais.</li>
                    <li><strong>A/B</strong> → amostragem reduz <strong>registros (linhas)</strong>, não colunas.</li>
                    <li><strong>D</strong> → remove duplicatas (qualidade), mas não reduz dimensionalidade.</li>
                    <li><strong>E</strong> → trata valores ausentes (missing), não colunas em excesso.</li>
                </ul>
            </>
        ),
    },

    {
        id: "bbti-bigdata-009",
        numero: 9,
        banca: "CESGRANRIO",
        prova: "BANCO DO BRASIL — Agente de Tecnologia",
        ano: 2021,
        tema: "Big Data",
        assunto: "Preparação de Dados — Suavização (Binning) e Ruído",
        exibirNoNivelamento: true,

        enunciado: (
            <>
                <p>
                    Na etapa de preparação de dados em um ambiente de Big Data, pode ocorrer o aparecimento
                    de dados ruidosos, que são dados fora de sentido no ambiente do Big Data e que não podem
                    ser interpretados pelo sistema. Uma forma de reduzir esse efeito, e até eliminá-lo, é
                    utilizar um método de suavização de dados, que minimiza os efeitos causados pelos dados ruidosos.
                </p>
                <p className="mb-0">Esse método consiste em</p>
            </>
        ),
        alternativas: [
            <>agrupar dados semelhantes em clusters, verificar os dados ruidosos e substituí-los por NULL.</>,
            <>criar um cubo de dados multidimensional para acelerar a identificação e eliminação do ruído.</>,
            <>dividir os valores dos dados originais em pequenos intervalos (compartimentos) e substituí-los por um valor representativo calculado para cada compartimento.</>,
            <>executar uma fusão baseada em vizinhos, obtendo novas variáveis que preencheriam espaços incoerentes.</>,
            <>realizar Data Mining gerando atributos “fantasmas”, sem valor para tratamento do Big Data.</>,
        ],
        correta: "C",
        comentario: (
            <>
                <p className="mb-2">
                    A suavização clássica descrita é o <strong>binning</strong>:
                    divide-se o domínio em <strong>intervalos (bins/compartimentos)</strong> e substitui-se
                    os valores por um representativo (ex.: média/mediana do bin), reduzindo o impacto do ruído.
                </p>

                <ul className="mb-0">
                    <li><strong>C (correta)</strong> → descreve exatamente binning (compartimentação).</li>
                    <li><strong>A</strong> → clustering não é “suavização”; além disso, “NULL” é um tratamento diferente.</li>
                    <li><strong>B</strong> → “cubo multidimensional” é distrator ligado a BI/DW.</li>
                    <li><strong>D</strong> → mistura com ideia de vizinhos/interpolação; não é a descrição clássica cobrada aqui.</li>
                    <li><strong>E</strong> → sem sentido técnico (distrator).</li>
                </ul>
            </>
        ),
    },

    {
        id: "bbti-bigdata-010",
        numero: 10,
        banca: "CESGRANRIO",
        prova: "TRANSPETRO — Profissional de Nível Superior",
        ano: 2023,
        tema: "Big Data",
        assunto: "Data Lake — Conceito e tipos de dados",
        exibirNoNivelamento: true,

        enunciado: (
            <p className="mb-0">
                A respeito do uso de Data Lakes como solução para o gerenciamento e análise de Big Data,
                constata-se que eles
            </p>
        ),
        alternativas: [
            <>convertem dados não estruturados em estruturados durante o processo de ingestão.</>,
            <>permitem o armazenamento de dados em formatos estruturados, semiestruturados e não estruturados, oferecendo flexibilidade na análise e no processamento de diferentes tipos de dados.</>,
            <>são geralmente implementados usando apenas sistemas de arquivos convencionais devido à sua eficiência em armazenar grandes volumes de dados.</>,
            <>são adequados apenas para armazenar grandes volumes de dados não estruturados.</>,
            <>são inadequados em soluções de Big Data por não suportarem alguns tipos de dados.</>,
        ],
        correta: "B",
        comentario: (
            <>
                <p className="mb-2">
                    Data Lake é um repositório que pode armazenar dados em múltiplos formatos
                    (<strong>estruturados</strong>, <strong>semiestruturados</strong> e <strong>não estruturados</strong>),
                    com flexibilidade para diferentes análises.
                </p>

                <ul className="mb-0">
                    <li><strong>B (correta)</strong> → descreve a flexibilidade de formatos e tipos de dados no Data Lake.</li>
                    <li><strong>A</strong> → Data Lake não “obriga” converter tudo para estruturado na ingestão.</li>
                    <li><strong>C</strong> → “apenas sistemas de arquivos convencionais” é generalização incorreta.</li>
                    <li><strong>D</strong> → não é “apenas não estruturado”; também recebe estruturado e semiestruturado.</li>
                    <li><strong>E</strong> → é o oposto: Data Lake é muito usado em Big Data exatamente por suportar variedade.</li>
                </ul>
            </>
        ),
    },

    {
        id: "bbti-bigdata-011",
        numero: 11,
        banca: "CESGRANRIO",
        prova: "BNDES — Analista",
        ano: 2024,
        tema: "Big Data",
        assunto: "Data Lake — Metadados",
        exibirNoNivelamento: true,

        enunciado: (
            <>
                <p>
                    Um data lake é um repositório que pode armazenar grandes volumes de dados e de conjuntos de dados,
                    sejam eles estruturados, semiestruturados ou não estruturados.
                </p>
                <p className="mb-0">
                    Um dos aspectos-chave de um data lake são os seus metadados, que
                </p>
            </>
        ),
        alternativas: [
            <>devem seguir o padrão American National Standards Institute (ANSI) já consagrado para metadados de data lakes.</>,
            <>descrevem completa e corretamente todos os dados persistidos.</>,
            <>precisam ser definidos antes da ingestão de dados.</>,
            <>podem ser consultados por meio do “information schema”.</>,
            <>podem ser parcialmente descobertos de forma automática.</>,
        ],
        correta: "E",
        comentario: (
            <>
                <p className="mb-2">
                    Em Data Lakes, os metadados podem ser obtidos/descobertos automaticamente (total ou parcialmente)
                    por mecanismos de <strong>catalogação</strong> e <strong>data discovery</strong>, ajudando a localizar,
                    entender e governar os dados disponíveis.
                </p>

                <ul className="mb-0">
                    <li><strong>E (correta)</strong> → metadados podem ser parcialmente descobertos automaticamente.</li>
                    <li><strong>A</strong> → não existe exigência universal “ANSI para metadados de data lakes” como regra geral.</li>
                    <li><strong>B</strong> → “completa e corretamente todos os dados” é forte demais; metadados podem ser incompletos.</li>
                    <li><strong>C</strong> → em Data Lake, muitas vezes os dados são ingeridos primeiro e catalogados depois.</li>
                    <li><strong>D</strong> → <em>information schema</em> é típico do mundo relacional/SQL, não é regra para Data Lake.</li>
                </ul>
            </>
        ),
    },

    {
        id: "bbti-bigdata-012",
        numero: 12,
        banca: "CESGRANRIO",
        prova: "IPEA — Técnico em Planejamento e Pesquisa",
        ano: 2024,
        tema: "Big Data",
        assunto: "MapReduce — Característica",
        exibirNoNivelamento: true,

        enunciado: (
            <>
                <p>
                    A utilização da plataforma paralela de processamento MapReduce aplica-se adequadamente como um
                    framework de processamento de Big Data, visando à escalabilidade para as aplicações.
                </p>
                <p className="mb-0">
                    Nesse contexto, uma característica inerente à MapReduce é a
                </p>
            </>
        ),
        alternativas: [
            <>sua abordagem, que reflete uma solução simplificada de processamento de dados paralelos em um cluster.</>,
            <>sua função map(), que gera, para cada registro de entrada, um ou mais pares (chave,valor).</>,
            <>sua função reduce(), que gera um resultado combinado em valores que compartilham chaves distintas.</>,
            <>sua demanda pela existência de um esquema de dados.</>,
            <>natureza estática de suas funções, que devem respeitar a especificação original, caracterizando uma restrição inerente a essa abordagem.</>,
        ],
        correta: "A",
        comentario: (
            <>
                <p className="mb-2">
                    A alternativa correta enfatiza a essência do MapReduce: um modelo que simplifica o
                    <strong> processamento paralelo</strong> em <strong>clusters</strong>, abstraindo detalhes de distribuição.
                </p>

                <ul className="mb-0">
                    <li><strong>A (correta)</strong> → solução simplificada de processamento paralelo em cluster.</li>
                    <li><strong>B</strong> → é uma descrição verdadeira do map em muitos casos, mas a banca escolheu a característica “macro” (simplificação/abstração).</li>
                    <li><strong>C</strong> → está errada: reduce combina valores com <strong>mesma chave</strong> (não “chaves distintas”).</li>
                    <li><strong>D</strong> → MapReduce não exige esquema rígido (pode operar com dados variados).</li>
                    <li><strong>E</strong> → não faz sentido como “restrição inerente”; é um distrator.</li>
                </ul>
            </>
        ),
    },

    {
        id: "bbti-bigdata-013",
        numero: 13,
        banca: "CESGRANRIO",
        prova: "IPEA — Técnico em Ciência de Dados",
        ano: 2024,
        tema: "Big Data",
        assunto: "Spark — Spark Core",
        exibirNoNivelamento: true,

        enunciado: (
            <>
                <p>
                    O Ecossistema Spark tem componentes que oferecem funcionalidades específicas que o tornam uma ferramenta
                    versátil e eficiente para o processamento de grandes volumes de dados, a análise em tempo real, o
                    aprendizado de máquina e muito mais. Dentre os componentes básicos, podemos destacar o Spark Core,
                    também conhecido como “coração” do Ecossistema, responsável por tarefas consideradas essenciais.
                </p>
                <p className="mb-0">
                    O componente <strong>Spark Core</strong>
                </p>
            </>
        ),
        alternativas: [
            <>é um módulo que atua como sistema de gerenciamento de banco de dados relacional para processamento de dados estruturados e distribuídos em um contexto Big Data.</>,
            <>é uma biblioteca para processamento de gráficos e análises de dados distribuídos, sem esquema e não estruturados, características principais em um ambiente Big Data.</>,
            <>é uma ferramenta responsável pelo tratamento e análise de streams de dados em tempo real, específica de grandes volumes, com velocidade e variedade.</>,
            <>corresponde ao módulo que contempla funcionalidades de computação distribuída, incluindo agendamento de tarefas e gerenciamento de memória, para aplicações Big Data.</>,
            <>diz respeito ao principal add-on da plataforma que, por ser um framework orientado a objetos, melhora a eficiência do armazenamento distribuído em clusters.</>,
        ],
        correta: "D",
        comentario: (
            <>
                <p className="mb-2">
                    O <strong>Spark Core</strong> é a base da plataforma: provê as capacidades essenciais de
                    <strong> execução distribuída</strong>, <strong>agendamento</strong>, <strong>gerenciamento de memória</strong>
                    e comunicação com o cluster. Os módulos especializados (SQL, Streaming, MLlib, GraphX) ficam “em cima” dele.
                </p>

                <ul className="mb-0">
                    <li><strong>D (correta)</strong> → descreve computação distribuída, agendamento e memória (núcleo).</li>
                    <li><strong>A</strong> → confunde com SGBD relacional (não é o Spark Core).</li>
                    <li><strong>B</strong> → confunde com GraphX/Graph processing (módulo especializado).</li>
                    <li><strong>C</strong> → confunde com Spark Streaming/Structured Streaming.</li>
                    <li><strong>E</strong> → descreve “add-on” e armazenamento distribuído de forma confusa (não é o Core).</li>
                </ul>
            </>
        ),
    },

    {
        id: "bbti-bigdata-014",
        numero: 14,
        banca: "CESGRANRIO",
        prova: "AGERIO — Analista de Desenvolvimento",
        ano: 2023,
        tema: "Big Data",
        assunto: "NoSQL — Documento x Coluna (MongoDB x HBase)",
        exibirNoNivelamento: true,

        enunciado: (
            <>
                <p>
                    Na implementação de sistemas de Big Data, é comum a utilização de tecnologias de Bancos de Dados NoSQL,
                    que têm como característica principal não seguir ou ir além do Modelo Relacional e da linguagem SQL.
                </p>
                <p className="mb-0">
                    Duas dessas tecnologias são os Bancos de Dados orientados a documentos e orientados a colunas,
                    exemplificados, respectivamente, pelos softwares
                </p>
            </>
        ),
        alternativas: [
            <>ArangoDB e MongoDB</>,
            <>HBase e ArangoDB</>,
            <>HBase e MongoDB</>,
            <>MongoDB e ArangoDB</>,
            <>MongoDB e HBase</>,
        ],
        correta: "E",
        comentario: (
            <>
                <p className="mb-2">
                    Bancos <strong>orientados a documentos</strong> têm como exemplo clássico o <strong>MongoDB</strong>.
                    Bancos <strong>orientados a colunas</strong> são exemplificados por <strong>HBase</strong> (modelo colunar
                    amplo, inspirado em BigTable).
                </p>

                <ul className="mb-0">
                    <li><strong>E (correta)</strong> → MongoDB (documentos) e HBase (colunas).</li>
                    <li><strong>A/D</strong> → ArangoDB é multimodelo (documento/grafo), não é o exemplo clássico pedido.</li>
                    <li><strong>B/C</strong> → invertem ou misturam as categorias (HBase não é documento; MongoDB não é colunar).</li>
                </ul>
            </>
        ),
    },
];
