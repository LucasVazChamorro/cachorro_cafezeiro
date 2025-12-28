export const questoesDataWarehouseConcurso = [
    // =========================
    // BLOCO 1 — Fundamentos DW
    // =========================
    {
        id: "bbti-dw-001",
        numero: 1,
        banca: "CESGRANRIO",
        prova: "LIQUIGÁS",
        ano: 2014,
        tema: "Data Warehouse",
        assunto: "Fundamentos — Definição (Inmon)",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — LIQUIGÁS (2014) — Profissional de Administração",
        enunciado: (
            <p className="mb-0">
                Data Warehouse pode ser conceituado como uma coleção de dados orientada por assuntos, integrada, assim como
            </p>
        ),
        alternativas: [
            <>não variante no tempo e volátil.</>,
            <>não variante no tempo e não volátil.</>,
            <>pouco variante no tempo e volátil.</>,
            <>variante no tempo e volátil.</>,
            <>variante no tempo e não volátil.</>,
        ],
        correta: "E",
        comentario: (
            <p className="mb-0">
                Definição clássica (Inmon): <strong>orientado por assunto</strong>, <strong>integrado</strong>,{" "}
                <strong>variante no tempo</strong> (histórico) e <strong>não volátil</strong> (estável e voltado à leitura).
            </p>
        ),
    },

    {
        id: "bbti-dw-002",
        numero: 2,
        banca: "CESGRANRIO",
        prova: "LIQUIGÁS",
        ano: 2012,
        tema: "Data Warehouse",
        assunto: "Fundamentos — Características (BI/DW)",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — LIQUIGÁS (2012) — Prof. Júnior (Administração e BD)",
        enunciado: (
            <>
                <p>
                    A tecnologia de datawarehousing tem se tornado uma importante ferramenta para implementação do conceito de
                    inteligência empresarial (business intelligence), proporcionando uma integração dos dados empresariais para a
                    realização de análises gerenciais e estratégicas.
                </p>
                <p className="mb-0">Entre as suas características, inclui-se:</p>
            </>
        ),
        alternativas: [
            <>A extração de dados de fontes únicas, necessitando de um data mart para cada fonte.</>,
            <>
                Incapacidade de lidar com múltiplos níveis de tempo devido à sua não volatilidade, requerendo um DW para cada
                granularidade dessa dimensão.
            </>,
            <>Orientação por assunto, permitindo o foco em processos de negócio específicos.</>,
            <>Volatilidade, necessitando de atualização a cada transação realizada no BD transacional.</>,
            <>
                Processo baseado em simples consultas a tabelas específicas, gerando uma correspondência 1-1 entre as tabelas do
                DW e do sistema transacional.
            </>,
        ],
        correta: "C",
        comentario: (
            <p className="mb-0">
                DW é <strong>orientado por assunto</strong> (temas do negócio) e integra dados para análise; não é volátil nem
                espelha tabelas 1-1 do OLTP.
            </p>
        ),
    },

    {
        id: "bbti-dw-003",
        numero: 3,
        banca: "CESGRANRIO",
        prova: "TRANSPETRO",
        ano: 2018,
        tema: "Data Warehouse",
        assunto: "Fundamentos — Fontes (internas/externas)",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — TRANSPETRO (2018) — Analista de Sistemas Júnior",
        enunciado: (
            <p className="mb-0">
                A tomada de decisão nas organizações pode ser suportada por bases dimensionais (data warehouses). Uma das
                características inerentes a esse repositório de dados é verificada por
            </p>
        ),
        alternativas: [
            <>
                diferenciar-se na estrutura de construção dos data marts, esses últimos construídos durante o processo de data
                mining.
            </>,
            <>
                permitir operações de manutenção similares às bases transacionais, com operações de alteração e remoção de
                registros específicos.
            </>,
            <>possibilitar a sua construção a partir de fontes de dados tanto internas quanto externas à organização.</>,
            <>possuir características atemporais, pelo caráter consolidador de suas estruturas de dados.</>,
            <>ser direcionada a aplicações, com foco nos processos de negócio organizacionais.</>,
        ],
        correta: "C",
        comentario: (
            <p className="mb-0">
                DW integra dados de <strong>múltiplas fontes</strong> (internas/externas). Não é atemporal (é variante no tempo) e
                não é voltado a manutenção transacional.
            </p>
        ),
    },

    // =========================
    // BLOCO 2 — ETL / STAGING
    // =========================
    {
        id: "bbti-dw-004",
        numero: 4,
        banca: "CESGRANRIO",
        prova: "PETROBRAS",
        ano: 2010,
        tema: "Data Warehouse",
        assunto: "ETL — Objetivo",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — PETROBRAS (2010) — Analista de Sistemas Júnior (Eng. Software)",
        enunciado: (
            <p className="mb-0">
                Em um ambiente de data warehousing, uma das fases mais importantes é a ETL (Extract, Transformation and Load),
                em que se definem estratégias de conversão, transformação e consistência dos dados. Uma característica relacionada
                a essa fase de ETL é que
            </p>
        ),
        alternativas: [
            <>
                a consistência é especialmente necessária em SGBDs relacionais, pois estes são incapazes de garantir consistências
                de transações e integridades referenciais.
            </>,
            <>
                sua existência é incompatível com o uso de sistemas legados, pois sua tecnologia antiquada impede integração em
                data warehousing.
            </>,
            <>
                pode ser eliminada, se o próprio SGBD relacional transacional for usado como banco do DW, gerando grande economia
                de recursos.
            </>,
            <>
                é necessária para se obter dados de múltiplas fontes, transformando-os nas variáveis que interessam ao processo de
                decisão.
            </>,
            <>
                visa garantir que cada registro do DW corresponda exatamente a um registro do SGBD transacional, assegurando
                correção das variáveis de decisão.
            </>,
        ],
        correta: "D",
        comentario: (
            <p className="mb-0">
                ETL existe para <strong>extrair de múltiplas fontes</strong>, <strong>transformar/limpar/padronizar</strong> e
                carregar dados úteis ao processo decisório. Não é “1-1” com OLTP.
            </p>
        ),
    },

    {
        id: "bbti-dw-005",
        numero: 5,
        banca: "CESGRANRIO",
        prova: "TRANSPETRO",
        ano: 2018,
        tema: "Data Warehouse",
        assunto: "ETL — Staging Area",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — TRANSPETRO (2018) — Analista de Sistemas Júnior",
        enunciado: (
            <p className="mb-0">
                No processo de extração, transformação e carga (ETL), uma característica da <strong>data staging area</strong> é a de
            </p>
        ),
        alternativas: [
            <>aderir ao barramento de serviços da organização, de forma fisicamente descentralizada.</>,
            <>apresentar serviços de consulta e apresentação para usuários finais dos servidores OLTP.</>,
            <>armazenar os dados selecionados provenientes das diversas fontes para serem usados pelo processo.</>,
            <>criar uma estrutura normalizada em enterprise data warehouses para suportar aplicações OLAP.</>,
            <>suportar o processo de engenharia reversa interpretável pelo administrador de banco de dados.</>,
        ],
        correta: "C",
        comentario: (
            <p className="mb-0">
                <strong>Staging Area</strong> é área temporária onde se <strong>armazenam dados extraídos</strong> antes da
                transformação e carga, reduzindo impacto no OLTP e facilitando reprocessamentos.
            </p>
        ),
    },

    // =========================================
    // BLOCO 3 — Dimensional: estrela e floco
    // =========================================
    {
        id: "bbti-dw-006",
        numero: 6,
        banca: "CESGRANRIO",
        prova: "PETROBRAS",
        ano: 2012,
        tema: "Data Warehouse",
        assunto: "Modelo Dimensional — Star Schema (conceito)",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — PETROBRAS (2012) — Analista de Sistemas Júnior",
        enunciado: (
            <p className="mb-0">
                O modelo estrela (star schema) é a denominação comum para um modelo de dados multidimensional. Nesse tipo de
                modelo,
            </p>
        ),
        alternativas: [
            <>a entidade central é a transação.</>,
            <>as dimensões são um conjunto de fatos.</>,
            <>
                as dimensões podem ser decompostas em várias medidas, originando o modelo conhecido como floco de neve (snowflake).
            </>,
            <>o relacionamento entre o fato e as dimensões é de um para um, formando um cubo ou hipercubo.</>,
            <>cada dimensão é representada por uma tabela.</>,
        ],
        correta: "E",
        comentario: (
            <p className="mb-0">
                No <strong>star schema</strong>, há uma <strong>tabela fato</strong> central e <strong>cada dimensão</strong> costuma ser
                representada por uma tabela.
            </p>
        ),
    },

    {
        id: "bbti-dw-007",
        numero: 7,
        banca: "CESGRANRIO",
        prova: "PETROBRAS",
        ano: 2006,
        tema: "Data Warehouse",
        assunto: "Modelo Dimensional — Star Schema (dimensão desnormalizada)",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — PETROBRAS (2006) — Analista de Sistemas Pleno",
        enunciado: (
            <p className="mb-0">
                Bases de dados de sistemas de informações gerenciais são projetadas, muitas vezes, em um esquema denominado
                estrela que:
            </p>
        ),
        alternativas: [
            <>é uma arquitetura física que permite definir somente estruturas unidimensionais de dados.</>,
            <>
                é composta por uma tabela central, denominada de dimensão, e várias tabelas periféricas a ela relacionadas,
                denominadas fatos.
            </>,
            <>apresenta tabelas periféricas que se encontram desnormalizadas.</>,
            <>faz com que a expansão e a evolução da base de dados necessite de grande atividade de manutenção.</>,
            <>é um esquema onde o número de junções realizadas é relativamente maior que o realizado em bases relacionais convencionais.</>,
        ],
        correta: "C",
        comentario: (
            <p className="mb-0">
                No esquema estrela, as tabelas de dimensão tendem a ser <strong>desnormalizadas</strong> para facilitar/otimizar consultas,
                reduzindo complexidade de junções.
            </p>
        ),
    },

    {
        id: "bbti-dw-008",
        numero: 8,
        banca: "CESGRANRIO",
        prova: "PETROBRAS",
        ano: 2011,
        tema: "Data Warehouse",
        assunto: "Modelo Dimensional — Snowflake",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — PETROBRAS (2011) — Analista de Sistemas",
        enunciado: (
            <p className="mb-0">
                Um dos esquemas multidimensionais mais comuns é o esquema floco de neve. Nesse esquema,
            </p>
        ),
        alternativas: [
            <>existem apenas tabelas de fatos, sendo que cada tupla representa um fato registrado.</>,
            <>
                existem apenas uma tabela de dimensões e tantas tabelas de fatos quanto as necessárias para identificar cada uma das dimensões.
            </>,
            <>
                existem uma tabela de fatos e várias tabelas de dimensões, sendo estas últimas organizadas em hierarquias e normalizadas.
            </>,
            <>existem diversas tabelas de fatos e de dimensões, estando todas desnormalizadas para melhor desempenho.</>,
            <>
                não podem existir mais de 3 tabelas de dimensões, pois, se assim fosse, deixaria de ser floco de neve e passaria a estrela.
            </>,
        ],
        correta: "C",
        comentario: (
            <p className="mb-0">
                <strong>Snowflake</strong>: dimensões com <strong>hierarquias</strong> e <strong>normalização</strong> (decomposição da dimensão),
                mantendo uma tabela fato central.
            </p>
        ),
    },

    {
        id: "bbti-dw-009",
        numero: 9,
        banca: "CESGRANRIO",
        prova: "PETROBRAS",
        ano: 2010,
        tema: "Data Warehouse",
        assunto: "Star x Snowflake — desempenho",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — PETROBRAS (2010) — Analista de Sistemas Júnior",
        enunciado: (
            <p className="mb-0">
                Técnicas de modelagem de Data Warehouses diferem das utilizadas em sistemas transacionais. Analisando o modelo
                multidimensional estrela, verifica-se que
            </p>
        ),
        alternativas: [
            <>possui melhor desempenho, quando comparado ao modelo floco de neve.</>,
            <>representa hierarquias explicitamente.</>,
            <>facilita a tarefa de manutenção das dimensões.</>,
            <>assemelha-se ao modelo de classes conceitual da UML.</>,
            <>é opcional a sua utilização, sendo substituído pelo diagrama de atividades da UML.</>,
        ],
        correta: "A",
        comentario: (
            <p className="mb-0">
                O <strong>star schema</strong> tende a oferecer melhor desempenho (menos junções) que o <strong>snowflake</strong>.
            </p>
        ),
    },

    {
        id: "bbti-dw-010",
        numero: 10,
        banca: "CESGRANRIO",
        prova: "CASA DA MOEDA",
        ano: 2009,
        tema: "Data Warehouse",
        assunto: "Modelo Dimensional — Identificar Star (imagem)",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — CASA DA MOEDA (2009) — Analista (BD)",
        enunciado: (
            <>
                <p>Analise a imagem a seguir relacionada a um Data Warehouse.</p>
                <div className="text-center">
                    <img
                        src="/nivelamento/ti/questoes/modelo-fatos-vendas.png"
                        alt="Modelo dimensional com tabela fato central e dimensões ao redor"
                        className="img-fluid rounded border"
                    />
                </div>
                <p className="mt-3 mb-0">Que tipo de modelo dimensional é apresentado nessa imagem?</p>
            </>
        ),
        alternativas: [<>Normalizado 3FN.</>, <>Floco de neve.</>, <>Boyce Codd.</>, <>Holístico.</>, <>Estrela.</>],
        correta: "E",
        comentario: (
            <p className="mb-0">
                A figura mostra uma <strong>tabela fato central</strong> ligada diretamente às dimensões → <strong>Star Schema</strong>.
            </p>
        ),
    },

    // ==================================
    // BLOCO 4 — Floco de neve (imagem)
    // ==================================
    {
        id: "bbti-dw-011",
        numero: 11,
        banca: "CESGRANRIO",
        prova: "TRANSPETRO",
        ano: 2018,
        tema: "Data Warehouse",
        assunto: "Modelo Dimensional — Identificar Snowflake (imagem)",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — TRANSPETRO (2018) — Analista de Sistemas Júnior",
        enunciado: (
            <>
                <p>
                    Seja o modelo dimensional de dados a seguir representado, onde a tabela “Venda” é a tabela de fatos, e as
                    demais tabelas representam dimensões. Nesse esquema, os atributos das tabelas foram omitidos.
                </p>
                <div className="text-center">
                    <img
                        src="/nivelamento/ti/questoes/modelo-venda-regiao.png"
                        alt="Modelo com fato Venda e dimensões, incluindo hierarquia Local->Região"
                        className="img-fluid rounded border"
                    />
                </div>
                <p className="mt-3 mb-0">Nesse caso, qual o modelo multidimensional adotado?</p>
            </>
        ),
        alternativas: [
            <>
                Estrela, com a aplicação da 3ª forma normal em tabelas de dimensão de primeiro nível, eleitas por critério de
                desempenho.
            </>,
            <>Estrela, com uma tabela de fatos central e tabelas de relacionamento ligadas a ela, mesmo que indiretamente.</>,
            <>
                Estrela, pela conjugação da dimensão “Tempo” com as demais dimensões, que a princípio deveriam ser modeladas em
                separado.
            </>,
            <>Floco de neve, especializando tabelas de dimensão por decomposição hierárquica.</>,
            <>Floco de neve, otimizando o desempenho do acesso aos dados pela decomposição de dimensões indexadas.</>,
        ],
        correta: "D",
        comentario: (
            <p className="mb-0">
                Há uma decomposição hierárquica de dimensão (ex.: <strong>Local</strong> ligado a <strong>Região</strong>), típica de{" "}
                <strong>snowflake</strong>.
            </p>
        ),
    },

    // ==========================================
    // BLOCO 5 — Projeto estrela na prática
    // ==========================================
    {
        id: "bbti-dw-012",
        numero: 12,
        banca: "CESGRANRIO",
        prova: "LIQUIGÁS",
        ano: 2018,
        tema: "Data Warehouse",
        assunto: "Star Schema — projeto (dimensão loja/cidade)",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — LIQUIGÁS (2018) — Prof. Júnior",
        enunciado: (
            <>
                <p>
                    Uma empresa pretende modelar um banco de dados multidimensional para tomada de decisão na área de vendas. O
                    gerente quer avaliar dados históricos por código/nome de produto, por mês/ano, por loja e por cidade (há várias
                    lojas em uma mesma cidade; das cidades é registrado apenas o nome; é necessário registrar em que cidade está
                    cada loja).
                </p>
                <p className="mb-0">Nesse banco bem projetado, segundo um esquema estrela, haverá</p>
            </>
        ),
        alternativas: [
            <>apenas uma tabela com atributos, como código do produto, nome do produto, mês/ano da venda, loja e cidade.</>,
            <>
                três tabelas de dimensões (produto, tempo, loja) e uma tabela de fatos (vendas), uma vez que cidade é atributo da
                tabela loja.
            </>,
            <>
                três tabelas de dimensões (produto, tempo, loja) e uma tabela de fatos (vendas), uma vez que cidade é atributo da
                tabela venda.
            </>,
            <>quatro tabelas de dimensões (produto, tempo, loja, cidade) e uma tabela de fatos (vendas).</>,
            <>quatro tabelas de fatos (produto, tempo, loja, cidade) e uma tabela de dimensões (vendas).</>,
        ],
        correta: "B",
        comentario: (
            <p className="mb-0">
                Em <strong>star</strong>, dimensões tendem a ser desnormalizadas: <strong>cidade</strong> pode ser atributo da dimensão{" "}
                <strong>loja</strong>.
            </p>
        ),
    },

    {
        id: "bbti-dw-013",
        numero: 13,
        banca: "CESGRANRIO",
        prova: "BANCO DO BRASIL",
        ano: 2018,
        tema: "Data Warehouse",
        assunto: "Star Schema — dimensões (TED)",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — BANCO DO BRASIL (2018) — Escriturário",
        enunciado: (
            <>
                <p>
                    Um desenvolvedor precisava construir um modelo estrela para produzir um data warehouse sobre as transferências
                    eletrônicas (TED) feitas pelos correntistas do banco.
                </p>
                <p className="mb-0">Que tabelas seriam adequadas para representar as dimensões desse modelo?</p>
            </>
        ),
        alternativas: [
            <>data, correntista, valor, banco destino</>,
            <>data, correntista, valor, cpf destino</>,
            <>correntista, valor, banco destino, cpf destino</>,
            <>data, valor, banco destino, cpf destino</>,
            <>data, correntista, banco destino, cpf destino</>,
        ],
        correta: "E",
        comentario: (
            <p className="mb-0">
                Em geral, <strong>valor</strong> é <strong>medida</strong> (fica na tabela fato). Dimensões descrevem o fato:{" "}
                <strong>data</strong>, <strong>correntista</strong>, <strong>banco destino</strong>, <strong>cpf destino</strong>.
            </p>
        ),
    },

    {
        id: "bbti-dw-014",
        numero: 14,
        banca: "CESGRANRIO",
        prova: "BANCO DO BRASIL",
        ano: 2021,
        tema: "Data Warehouse",
        assunto: "Tabela Fato — atributos (FKs + medidas)",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — BANCO DO BRASIL (2021) — Agente de Tecnologia",
        enunciado: (
            <p className="mb-0">
                Em um modelo estrela para empréstimos (valor e prazo), com dimensões tempo (dia, mês, ano), agência (estado, cidade,
                bairro, número), produto (nome, juros) e cliente (conta, nome), usando a granularidade mais baixa, que atributos
                devem constar da tabela fato?
            </p>
        ),
        alternativas: [
            <>
                fato_id, dia, mes, ano, estado, cidade, bairro, numero_agencia, nome_produto, juros_mensais_produto, conta_cliente,
                nome_cliente, valor_emprestimo, prazo_emprestimo
            </>,
            <>fato_id, emprestimo_id, valor_emprestimo, prazo_emprestimo</>,
            <>fato_id, tempo_id, agencia_id, produto_id, cliente_id, emprestimo_id</>,
            <>
                fato_id, tempo_id, agencia_id, produto_id, cliente_id, dia, mes, ano, estado, cidade, bairro, numero_agencia,
                nome_produto, juros_mensais_produto, conta_cliente, nome_cliente, valor_emprestimo, prazo_emprestimo
            </>,
            <>fato_id, tempo_id, agencia_id, produto_id, cliente_id, valor_emprestimo, prazo_emprestimo</>,
        ],
        correta: "E",
        comentario: (
            <p className="mb-0">
                Tabela fato guarda <strong>FKs (IDs) das dimensões</strong> + <strong>medidas</strong> (valor, prazo). Atributos
                descritivos ficam nas dimensões.
            </p>
        ),
    },

    // =========================
    // BLOCO 6 — OLAP operações
    // =========================
    {
        id: "bbti-dw-015",
        numero: 15,
        banca: "CESGRANRIO",
        prova: "LIQUIGÁS",
        ano: 2018,
        tema: "Data Warehouse",
        assunto: "OLAP — Drill-down",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — LIQUIGÁS (2018) — Analista de Sistemas",
        enunciado: (
            <p className="mb-0">
                O drill-down (desmembramento) é uma operação que, em um cubo OLAP, permite visualizar
            </p>
        ),
        alternativas: [
            <>apenas dados agregados.</>,
            <>dados do cubo, mantendo uma das dimensões fixa.</>,
            <>dados detalhados, até o menor nível de granularidade da tabela de fatos.</>,
            <>dados detalhados, além do menor nível de granularidade da tabela de fatos.</>,
            <>um subconjunto do cubo com mais de uma dimensão fixa.</>,
        ],
        correta: "C",
        comentario: (
            <p className="mb-0">
                <strong>Drill-down</strong> aumenta o detalhamento (mais granular) até o menor nível disponível.
            </p>
        ),
    },

    {
        id: "bbti-dw-016",
        numero: 16,
        banca: "CESGRANRIO",
        prova: "CMB",
        ano: 2012,
        tema: "Data Warehouse",
        assunto: "OLAP — Drill-down (hierarquia)",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — CMB (2012) — Analista (Desenv. de Sistemas)",
        enunciado: (
            <p className="mb-0">
                Um executivo observa vendas de 2011 por estado. Considerando a dimensão Localidade na hierarquia (Região, Estado,
                Município), que operação deve realizar para expandir os detalhes e apresentar os municípios?
            </p>
        ),
        alternativas: [<>drill up</>, <>drill down</>, <>roll pivot</>, <>drill and cross</>, <>roll and cross</>],
        correta: "B",
        comentario: (
            <p className="mb-0">
                Para sair de <strong>Estado</strong> para <strong>Município</strong> (mais detalhe), aplica-se <strong>drill-down</strong>.
            </p>
        ),
    },

    {
        id: "bbti-dw-017",
        numero: 17,
        banca: "CESGRANRIO",
        prova: "BANCO DA AMAZÔNIA",
        ano: 2021,
        tema: "Data Warehouse",
        assunto: "OLAP — Roll-up + Pivot",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — BANCO DA AMAZÔNIA (2021) — Técnico Científico",
        enunciado: (
            <p className="mb-0">
                O diretor pediu reapresentar uma tabela “produtos × municípios” como “estados × produtos”, usando recursos OLAP.
                Quais operações atendem a isso?
            </p>
        ),
        alternativas: [
            <>slice e roll-up</>,
            <>roll-up e drill-down</>,
            <>roll-up e rotation (pivot)</>,
            <>rotation (pivot) e drill-down</>,
            <>drill-down e slice</>,
        ],
        correta: "C",
        comentario: (
            <p className="mb-0">
                De <strong>município</strong> para <strong>estado</strong> é <strong>roll-up</strong> (agrega). Trocar eixos/visão é{" "}
                <strong>pivot (rotation)</strong>.
            </p>
        ),
    },

    {
        id: "bbti-dw-018",
        numero: 18,
        banca: "CESGRANRIO",
        prova: "TRANSPETRO",
        ano: 2018,
        tema: "Data Warehouse",
        assunto: "OLAP — Pivot + Drill-down",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — TRANSPETRO (2018) — Analista de Sistemas Júnior",
        enunciado: (
            <p className="mb-0">
                Um gestor analisava rendimento anual por região e por produto. Depois mudou o enfoque e passou a observar o mesmo
                rendimento médio anual por produto e por estado. Quais duas operações OLAP ele realizou?
            </p>
        ),
        alternativas: [
            <>drill across e dicing</>,
            <>pivoting e drill down</>,
            <>roll down e drill through</>,
            <>roll up e slicing</>,
            <>slicing e dicing</>,
        ],
        correta: "B",
        comentario: (
            <p className="mb-0">
                Troca da estrutura de visualização = <strong>pivot</strong>. Ir de <strong>região</strong> para <strong>estado</strong> (mais detalhe na hierarquia) = <strong>drill-down</strong>.
            </p>
        ),
    },

    {
        id: "bbti-dw-019",
        numero: 19,
        banca: "CESGRANRIO",
        prova: "BANCO DO BRASIL",
        ano: 2018,
        tema: "Data Warehouse",
        assunto: "OLAP — Roll-up + Rotation (imagem)",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — BANCO DO BRASIL (2018) — Escriturário",
        enunciado: (
            <>
                <p>
                    Considere as tabelas T, X e Y a seguir. (T: Produto × Trimestres; X: Produto × Total; Y: Trimestres × Produto)
                </p>
                <div className="text-center">
                    <img
                        src="/nivelamento/ti/questoes/tabelas-txy.png"
                        alt="Tabelas T, X e Y (OLAP)"
                        className="img-fluid rounded border"
                    />
                </div>
                <p className="mt-3 mb-0">
                    Considerando o conceito de OLAP, quais foram as operações realizadas de T para X e de T para Y, respectivamente?
                </p>
            </>
        ),
        alternativas: [
            <>Drill Down e Roll-Up</>,
            <>Drill Down e Rotation</>,
            <>Slice e Roll-Up</>,
            <>Roll-Up e Drill Down</>,
            <>Roll-Up e Rotation</>,
        ],
        correta: "E",
        comentario: (
            <p className="mb-0">
                De T para X: agrega trimestres para total anual → <strong>roll-up</strong>. De T para Y: troca linhas/colunas →{" "}
                <strong>rotation (pivot)</strong>.
            </p>
        ),
    },

    {
        id: "bbti-dw-020",
        numero: 20,
        banca: "CESGRANRIO",
        prova: "LIQUIGÁS",
        ano: 2012,
        tema: "Data Warehouse",
        assunto: "OLAP — Slice/Dice + Drill-down (tempo/local)",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — LIQUIGÁS (2012) — Prof. Júnior",
        enunciado: (
            <p className="mb-0">
                Uma consulta forma um cubo com vendas anuais de duas famílias de produtos de uma região. Quer-se obter outro cubo
                com vendas mensais de apenas uma família por estado da região original. As operações necessárias são:
            </p>
        ),
        alternativas: [
            <>“Slice and dice”, “roll up” e “drill down”</>,
            <>“Slice and dice”, “time down” e “drill down”</>,
            <>“Slice and dice” e dois “drill down”</>,
            <>“Drill across” e dois “drill down”</>,
            <>“Drill across”, “time down” e “drill down”</>,
        ],
        correta: "C",
        comentario: (
            <p className="mb-0">
                Selecionar uma família (subcubo) = <strong>slice/dice</strong>. Sair de <strong>anual → mensal</strong> é{" "}
                <strong>drill-down</strong> na dimensão tempo; sair de <strong>região → estado</strong> é <strong>drill-down</strong> na
                dimensão local.
            </p>
        ),
    },

    // ============================================
    // BLOCO 7 — Avançadas / pegadinhas / soluções
    // ============================================
    {
        id: "bbti-dw-021",
        numero: 21,
        banca: "CESGRANRIO",
        prova: "BNDES",
        ano: 2013,
        tema: "Data Warehouse",
        assunto: "OLAP/Modelagem — Afirmativas (pegadinha)",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — BNDES (2013) — Profissional Básico (Análise de Sistemas)",
        enunciado: (
            <>
                <p>Sejam as seguintes afirmativas sobre Data Warehouses:</p>
                <p className="mb-1">I - Uma tabela de dimensão contém metadados relativos a uma ou mais tabelas de fatos.</p>
                <p className="mb-1">
                    II - O esquema floco de neve consiste em uma hierarquia de tabelas de fatos que compartilham uma tabela
                    dimensão.
                </p>
                <p className="mb-1">III - Pivoteamento é uma técnica usada para sumarizar dados ao longo de uma dimensão.</p>
                <p className="mb-0">IV - Drill-down é uma operação usada para prover uma visão desagregada dos dados.</p>
                <p className="mt-3 mb-0">Estão corretas APENAS as afirmativas</p>
            </>
        ),
        alternativas: [<>I e III</>, <>I e IV</>, <>II e III</>, <>II e IV</>, <>III e IV</>],
        correta: "B",
        comentario: (
            <>
                <p className="mb-0">
                    Em provas, dimensão costuma ser tratada como tabela que guarda atributos descritivos (muitas vezes chamados de
                    “metadados” da análise). O item II está errado (não é hierarquia de tabelas fato). Pivot não é sumarização
                    (isso é mais relacionado a agregação/roll-up). Drill-down dá visão mais detalhada.
                </p>
            </>
        ),
    },

    {
        id: "bbti-dw-022",
        numero: 22,
        banca: "CESGRANRIO",
        prova: "LIQUIGÁS",
        ano: 2018,
        tema: "Data Warehouse",
        assunto: "Fatos — Medidas aditivas",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — LIQUIGÁS (2018) — Analista de Sistemas",
        enunciado: <p className="mb-0">Em um banco de dados multidimensional, os fatos aditivos</p>,
        alternativas: [
            <>não podem ser somados em nenhuma dimensão.</>,
            <>podem ser somados apenas para um nível superior de uma dimensão, caso haja hierarquia na dimensão.</>,
            <>podem ser somados em apenas algumas dimensões.</>,
            <>podem ser somados em todas as dimensões.</>,
            <>só não podem ser somados na dimensão temporal.</>,
        ],
        correta: "D",
        comentario: (
            <p className="mb-0">
                Medidas <strong>aditivas</strong> são somáveis em <strong>todas</strong> as dimensões (ex.: quantidade, valor).
            </p>
        ),
    },

    {
        id: "bbti-dw-023",
        numero: 23,
        banca: "CESGRANRIO",
        prova: "PETROBRAS",
        ano: 2012,
        tema: "Data Warehouse",
        assunto: "OLAP — ROLAP",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — PETROBRAS (2012) — Analista de Sistemas Júnior",
        enunciado: <p className="mb-0">Em produtos ROLAP, os cubos são alimentados</p>,
        alternativas: [
            <>por uma base de cláusulas e regras de negócio</>,
            <>por um banco de dados relacional especialmente desenhado para o processamento analítico</>,
            <>por uma cópia dos dados carregada em uma matriz de armazenamento otimizada</>,
            <>pelo cruzamento instantâneo de dados em bancos hierárquicos</>,
            <>pelo mesmo banco de dados relacional desenhado para um sistema OLTP</>,
        ],
        correta: "B",
        comentario: (
            <p className="mb-0">
                <strong>ROLAP</strong> usa <strong>banco relacional</strong> voltado a consultas analíticas (DW relacional / modelo dimensional).
            </p>
        ),
    },

    {
        id: "bbti-dw-024",
        numero: 24,
        banca: "CESGRANRIO",
        prova: "BANCO DO BRASIL",
        ano: 2021,
        tema: "Data Warehouse",
        assunto: "Modelagem orientada a ocorrências (matriz)",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — BANCO DO BRASIL (2021) — Agente de Tecnologia",
        enunciado: (
            <p className="mb-0">
                Um sistema Big Data precisa organizar dados como sendo um fato (evento de ocorrência), por exemplo: compras de um
                insumo, em um fornecedor e em um instante. Para tal finalidade, o sistema deverá estar organizado segundo a
                configuração de
            </p>
        ),
        alternativas: [<>Cubo de dados</>, <>Tuplas estáticas</>, <>Matriz de ocorrência</>, <>Documentos lineares</>, <>Subconjunto de atributos</>],
        correta: "C",
        comentario: (
            <p className="mb-0">
                A ideia de <strong>fato como ocorrência/evento</strong> remete a uma estrutura de ocorrências (matriz de ocorrência) típica de modelagens orientadas a eventos/ocorrências.
            </p>
        ),
    },

    // ==========================
    // BLOCO 8 — OLTP x OLAP
    // ==========================
    {
        id: "bbti-dw-025",
        numero: 25,
        banca: "CESGRANRIO",
        prova: "LIQUIGÁS",
        ano: 2018,
        tema: "Data Warehouse",
        assunto: "OLTP x OLAP — modelo multidimensional",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — LIQUIGÁS (2018) — Analista de Sistemas",
        enunciado: (
            <>
                <p>Em uma empresa, é comum haver vários sistemas de informações e aplicações, para apoiar o seu funcionamento.</p>
                <p className="mb-0">Nesse contexto, os bancos de dados de sistemas</p>
            </>
        ),
        alternativas: [
            <>OLAP seguem o modelo multidimensional.</>,
            <>OLAP seguem o modelo relacional.</>,
            <>OLTP são orientados por assunto.</>,
            <>OLTP são concebidos apenas para consulta.</>,
            <>OLTP têm por objetivo o apoio à decisão.</>,
        ],
        correta: "A",
        comentario: (
            <p className="mb-0">
                Em provas, <strong>OLAP</strong> é associado ao <strong>modelo multidimensional</strong> (cubo/estrela). OLTP é operacional e transacional.
            </p>
        ),
    },

    {
        id: "bbti-dw-026",
        numero: 26,
        banca: "CESGRANRIO",
        prova: "LIQUIGÁS",
        ano: 2018,
        tema: "Data Warehouse",
        assunto: "OLTP → origem dos dados do DW",
        exibirNoNivelamento: true,

        fonte: "CESGRANRIO — LIQUIGÁS (2018) — Prof. Júnior",
        enunciado: <p className="mb-0">Um banco de dados multidimensional em uma empresa</p>,
        alternativas: [
            <>é semelhante a um banco de dados relacional, exceto por não possuir FKs (chaves estrangeiras).</>,
            <>
                é semelhante a um banco de dados relacional onde cada tabela tem uma coluna adicional para representar a dimensão temporal.
            </>,
            <>alimenta com seus dados os bancos de dados transacionais necessários para o negócio.</>,
            <>permite apenas consultas predefinidas aos dados armazenados.</>,
            <>tem seus dados oriundos de bancos de dados transacionais.</>,
        ],
        correta: "E",
        comentario: (
            <p className="mb-0">
                O ambiente analítico (DW/OLAP) costuma ser alimentado por dados vindos do <strong>OLTP</strong> (sistemas transacionais).
            </p>
        ),
    },
];
