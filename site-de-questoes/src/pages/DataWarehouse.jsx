import NivelamentoLayout from "../components/nivelamento/NivelamentoLayout.jsx";
import NivelamentoCard from "../components/nivelamento/NivelamentoCard.jsx";
import QuestaoCard from "../components/nivelamento/QuestaoCard.jsx";
// import { questoesDataWarehouse } from "./questoes/questoesDataWarehouse.jsx";
import { questoesDataWarehouseConcurso } from "../data/banco-questoes/datawarehouse.concurso.jsx";

import {
    Database,
    Diagram3,
    ArrowLeftRight,
    Funnel,
    CloudArrowDown,
    Check2Circle,
    Layers,
    Grid3x3Gap,
    BarChartSteps,
    ArrowDownUp,
} from "react-bootstrap-icons";

function Secao({ id, Icon, titulo }) {
    return (
        <div id={id} className="mt-5 mb-4">
            <div className="d-flex align-items-center gap-3 border-bottom pb-2">
                <span
                    className="d-inline-flex align-items-center justify-content-center border rounded-circle"
                    style={{ width: 44, height: 44, flex: "0 0 44px", background: "#fff" }}
                >
                    <Icon size={22} />
                </span>
                <h3 className="m-0">{titulo}</h3>
            </div>
        </div>
    );
}

export default function DataWarehouse() {
    return (
        <NivelamentoLayout
            title="DATA WAREHOUSE"
            subtitle="Resumo direto para prova, com foco em como a Cesgranrio costuma cobrar."
            coverSrc="/nivelamento/ti/DataWarehouse.png"
            breadcrumbs={[
                { label: "Início", href: "/index.html" },
                { label: "Dashboard", href: "/dashboard.html" },
                { label: "Tecnologia da Informação", href: "/nivelamento/ti/" },
                { label: "DATA WAREHOUSE" },
            ]}
        >
            {/* 1) Introdução */}
            <Secao id="sec-intro" Icon={Database} titulo="1. Introdução" />

            <NivelamentoCard title="Por que Data Warehouse existe?">
                <p className="mb-0">
                    Em ambientes organizacionais modernos, os dados assumem papel central no apoio à tomada de decisão.
                    De forma geral, esses dados podem ser classificados em <strong>dados transacionais</strong> e{" "}
                    <strong>dados analíticos</strong>, sendo essa distinção fundamental para compreender o conceito de{" "}
                    <strong>Data Warehouse</strong>.
                </p>
            </NivelamentoCard>

            {/* 2) Dados transacionais x analíticos */}
            <Secao
                id="sec-transacionais-analiticos"
                Icon={ArrowLeftRight}
                titulo="2. Dados Transacionais e Dados Analíticos"
            />

            <NivelamentoCard title="Transacionais (OLTP) x Analíticos (OLAP/DW)">
                <p>
                    Os <strong>dados transacionais</strong> são aqueles gerados a partir das transações e das operações
                    rotineiras da organização. Eles representam eventos individuais do negócio, como uma venda realizada,
                    um pagamento efetuado ou um produto cadastrado. Esses dados registram informações detalhadas, como
                    data e hora da transação, valores, produtos, clientes e formas de pagamento, refletindo o estado
                    operacional corrente do sistema. Por essa razão, são frequentemente atualizados e caracterizam os
                    sistemas operacionais, também chamados de sistemas <strong>OLTP</strong>.
                </p>

                <p className="mb-0">
                    Já os <strong>dados analíticos</strong> surgem a partir do processamento dos dados transacionais.
                    Eles resultam de cálculos, consolidações e agregações e têm como finalidade apoiar decisões
                    gerenciais e estratégicas. Diferentemente dos dados operacionais, os dados analíticos são orientados
                    à análise e à consulta, permitindo análises históricas, comparações entre períodos e identificação
                    de tendências de longo prazo.
                </p>

                <div className="tip-box mt-3">
                    <strong>Resumo:</strong>
                    <br />
                    <br />
                    <strong>Dados transacionais (OLTP)</strong>
                    <br />
                    evento individual, alto nível de detalhe, atualização constante.
                    <br />
                    <br />
                    <strong>Dados analíticos (OLAP / DW)</strong>
                    <br />
                    dados históricos, agregados, voltados à análise, à consulta e à tomada de decisão.
                </div>
            </NivelamentoCard>

            {/* 3) Conceito de DW */}
            <Secao id="sec-conceito" Icon={Diagram3} titulo="3. Conceito de Data Warehouse" />

            <NivelamentoCard title="Definição (Inmon)">
                <p>
                    O <strong>Data Warehouse (DW)</strong> pode ser entendido como um grande repositório (armazém) de
                    dados destinado ao apoio à tomada de decisão. Segundo a definição clássica de Inmon, um Data
                    Warehouse é uma coleção de dados <strong>orientada por assunto</strong>, <strong>integrada</strong>,{" "}
                    <strong>variante no tempo</strong> e <strong>não volátil</strong>, cujo objetivo é dar suporte aos
                    processos decisórios das organizações.
                </p>

                <p className="mb-0">
                    Em termos práticos, o Data Warehouse funciona como um depósito de dados consolidados, reunindo
                    informações de diferentes fontes (por exemplo: bancos de dados transacionais, planilhas e sistemas
                    externos) e organizando-as para consultas analíticas. Por ser <strong>não volátil</strong>, o Data
                    Warehouse não é projetado para exclusões ou atualizações frequentes, mantendo o histórico completo
                    dos dados. Sua alimentação ocorre periodicamente a partir dos sistemas operacionais, permitindo
                    análises históricas e estratégicas.
                </p>

                <div className="tip-box mt-3">
                    <strong>Palavras-chave:</strong>
                    <br />
                    <br />
                    <strong>Orientado por assunto</strong> (vendas, clientes, produtos).
                    <br />
                    <strong>Integrado</strong> (múltiplas fontes padronizadas).
                    <br />
                    <strong>Variante no tempo</strong> (histórico).
                    <br />
                    <strong>Não volátil</strong> (estável, orientado à leitura; sem updates operacionais frequentes).
                    <br />
                    <br />
                    <strong>Não volátil não significa que nunca recebe dados</strong>, mas significa que:
                    <br />
                    ❌ não sofre atualizações frequentes
                    <br />
                    ❌ não é usado para INSERT/UPDATE/DELETE operacionais
                    <br />
                    ✔️ é estável e orientado à leitura/consulta
                    <br />
                    <br />
                    <strong>Carga de dados:</strong>
                    <br />
                    OLTP atualiza continuamente; o DW é alimentado periodicamente (ex.: via ETL).
                </div>
            </NivelamentoCard>

            {/* 4) Características do DW */}
            <Secao id="sec-caracteristicas" Icon={Check2Circle} titulo="4. Características do Data Warehouse" />

            <NivelamentoCard title="Características do Data Warehouse">
                <p>
                    Uma das principais características do Data Warehouse é a <strong>não volatilidade</strong>. Isso não
                    significa que o Data Warehouse nunca receba dados, mas que os dados, uma vez carregados, não sofrem
                    atualizações frequentes nem exclusões operacionais, sendo disponibilizados predominantemente para
                    consulta. Essa característica garante a estabilidade das informações e é frequentemente explorada
                    pela banca <strong>CESGRANRIO</strong>.
                </p>

                <p>
                    Outra característica essencial é a <strong>integração</strong>. Como os dados são oriundos de
                    múltiplas fontes, torna-se necessário padronizar formatos, códigos e unidades de medida, garantindo
                    uma representação única da informação. Assim, dados equivalentes, mesmo provenientes de sistemas
                    distintos, podem ser analisados de forma consistente.
                </p>

                <p>
                    O Data Warehouse também é <strong>orientado por assunto</strong>, organizando os dados em torno de
                    temas relevantes para o negócio, como clientes, produtos, vendas ou tempo. Essa abordagem difere dos
                    sistemas transacionais, que são orientados a processos.
                </p>

                <p className="mb-0">
                    Por fim, o Data Warehouse é <strong>histórico</strong>, ou <strong>variante no tempo</strong>. Cada
                    registro possui um componente temporal, permitindo análises comparativas ao longo dos anos e
                    possibilitando a identificação de tendências, algo que não é viável em sistemas operacionais
                    tradicionais.
                </p>

                <div className="tip-box mt-3">
                    <strong>Resumo — Características do DW:</strong>
                    <br />
                    <br />
                    <strong>Não volátil</strong>
                    <br />
                    dados estáveis, orientados à consulta, sem atualizações operacionais frequentes.
                    <br />
                    <br />
                    <strong>Integrado</strong>
                    <br />
                    dados consolidados e padronizados a partir de múltiplas fontes.
                    <br />
                    <br />
                    <strong>Orientado por assunto</strong>
                    <br />
                    organização por temas do negócio, não por processos.
                    <br />
                    <br />
                    <strong>Variante no tempo</strong>
                    <br />
                    dados históricos com possibilidade de comparação entre períodos e análise de tendências.
                </div>
            </NivelamentoCard>

            {/* 5) ETL */}
            <Secao id="sec-etl" Icon={Funnel} titulo="5. ETL — Extração, Transformação e Carga" />

            <NivelamentoCard title="ETL e Staging Area">
                <p>
                    Para que os dados sejam armazenados no Data Warehouse de forma adequada, utiliza-se o processo
                    conhecido como <strong>ETL</strong>, sigla para <strong>Extração</strong>,{" "}
                    <strong>Transformação</strong> e <strong>Carga</strong>. Esse processo é responsável por alimentar
                    periodicamente o Data Warehouse, respeitando suas características de integração, não volatilidade e
                    orientação à consulta.
                </p>

                <p>
                    Durante o processo de ETL, é comum a utilização de uma área intermediária chamada{" "}
                    <strong>Staging Area</strong>. Essa área funciona como um repositório temporário, no qual os dados
                    extraídos são armazenados antes das etapas de transformação e carga, evitando impacto direto nos
                    sistemas operacionais e facilitando o tratamento dos dados.
                </p>

                <p>
                    Na etapa de <strong>extração</strong>, os dados são coletados a partir dos sistemas de origem, como
                    bancos de dados transacionais (OLTP), planilhas, sistemas legados ou fontes externas. Nessa fase,
                    os dados ainda se encontram no formato original em que foram gerados.
                </p>

                <p>
                    A <strong>transformação</strong> é considerada a etapa mais crítica do processo. Nela, os dados
                    passam por atividades de limpeza, validação, padronização e consolidação. É nesse momento que se
                    garante a qualidade, a consistência e a integração das informações provenientes de múltiplas fontes.
                </p>

                <p className="mb-0">
                    Por fim, a etapa de <strong>carga</strong> consiste na inserção física dos dados já tratados no Data
                    Warehouse, seguindo o modelo adotado pela organização. A carga ocorre de forma{" "}
                    <strong>periódica</strong>, e não em tempo real, reforçando a característica de não volatilidade do
                    DW.
                </p>

                <div className="tip-box mt-3">
                    <strong>Resumo — ETL:</strong>
                    <br />
                    <br />
                    <strong>Extração</strong>
                    <br />
                    coleta de dados a partir de sistemas de origem (OLTP e fontes externas).
                    <br />
                    <br />
                    <strong>Staging Area</strong>
                    <br />
                    área intermediária temporária para armazenamento dos dados extraídos, reduzindo impacto nos sistemas
                    operacionais e facilitando o tratamento dos dados.
                    <br />
                    <br />
                    <strong>Transformação</strong>
                    <br />
                    limpeza, validação, padronização e consolidação dos dados.
                    <br />
                    <br />
                    <strong>Carga</strong>
                    <br />
                    inserção periódica dos dados tratados no Data Warehouse.
                    <br />
                    <br />
                    <strong>Relação com o DW:</strong>
                    <br />
                    o ETL garante dados integrados, históricos, estáveis e orientados à consulta.
                </div>
            </NivelamentoCard>

            {/* 6) ELT e Data Lake */}
            <Secao id="sec-elt" Icon={CloudArrowDown} titulo="6. ELT e Data Lake" />

            <NivelamentoCard title="ELT e schema-on-read">
                <p>
                    Em arquiteturas modernas, especialmente associadas a ambientes de Big Data e computação em nuvem,
                    pode-se utilizar a abordagem <strong>ELT</strong> (Extract, Load, Transform). Diferentemente do ETL
                    tradicional, nessa abordagem os dados são extraídos das fontes de origem, carregados diretamente no
                    ambiente de destino e transformados posteriormente, utilizando o próprio poder de processamento
                    desse ambiente.
                </p>

                <p>
                    A abordagem ELT tornou-se viável devido ao aumento da capacidade de armazenamento e processamento
                    dos sistemas modernos, permitindo que grandes volumes de dados sejam carregados rapidamente e
                    transformados conforme a necessidade das análises.
                </p>

                <p>
                    Nesse contexto, surge o <strong>Data Lake</strong>, um repositório destinado ao armazenamento de
                    grandes volumes de dados em formato bruto, incluindo dados estruturados, semiestruturados e não
                    estruturados. Diferentemente do Data Warehouse, o Data Lake adota o conceito de{" "}
                    <strong>esquema na leitura (schema-on-read)</strong>.
                </p>

                <p className="mb-0">
                    No Data Lake, a lógica de negócios e a transformação dos dados são aplicadas no momento do acesso às
                    informações, geralmente por meio de consultas ad hoc e de forma temporária. Essas transformações são
                    realizadas para atender a análises específicas e, em regra, não são persistidas no banco de dados,
                    diferentemente do que ocorre no Data Warehouse.
                </p>

                <div className="tip-box mt-3">
                    <strong>Resumo — ELT e Data Lake:</strong>
                    <br />
                    <br />
                    <strong>ELT</strong>
                    <br />
                    extrai, carrega os dados no destino e transforma posteriormente.
                    <br />
                    <br />
                    <strong>Data Lake</strong>
                    <br />
                    dados brutos, esquema na leitura e transformações ad hoc aplicadas no acesso.
                    <br />
                    <br />
                    <strong>Lógica de negócios</strong>
                    <br />
                    aplicada durante a leitura dos dados, de forma temporária e sem persistência no SGBD.
                    <br />
                    <br />
                    <strong>Diferença em relação ao DW</strong>
                    <br />
                    o DW transforma e armazena dados tratados; o Data Lake armazena dados brutos.
                </div>
            </NivelamentoCard>

            {/* 7) DW × Lake × Mart */}
            <Secao id="sec-comparativo" Icon={Layers} titulo="7. Data Warehouse × Data Lake × Data Mart" />

            <NivelamentoCard title="Comparação (BI e Analytics)">
                <p>
                    No contexto de Business Intelligence e Analytics, é fundamental compreender as diferenças entre{" "}
                    <strong>Data Warehouse</strong>, <strong>Data Lake</strong> e <strong>Data Mart</strong>. Embora todos
                    sejam repositórios de dados, eles possuem finalidades, características e níveis de granularidade
                    distintos.
                </p>

                <p>
                    O <strong>Data Warehouse</strong> é um repositório corporativo centralizado, voltado ao apoio à
                    tomada de decisão. Ele armazena dados históricos, integrados e pré-tratados, organizados segundo um{" "}
                    <strong>esquema na escrita (schema-on-write)</strong>. Sua principal característica é a estabilidade,
                    sendo orientado à consulta e à análise.
                </p>

                <p>
                    O <strong>Data Lake</strong>, por sua vez, armazena grandes volumes de dados em seu formato bruto,
                    incluindo dados estruturados, semiestruturados e não estruturados. Ele utiliza a abordagem de{" "}
                    <strong>esquema na leitura (schema-on-read)</strong>, na qual a lógica de negócios e as
                    transformações são aplicadas no momento do acesso, geralmente por meio de consultas ad hoc, de forma
                    temporária e sem persistência no SGBD.
                </p>

                <p className="mb-0">
                    O <strong>Data Mart</strong> é um subconjunto do Data Warehouse, voltado a uma área específica do
                    negócio, como vendas, finanças ou marketing. Seu objetivo é fornecer acesso mais rápido e direcionado
                    às informações relevantes para determinado departamento ou unidade organizacional.
                </p>

                <div className="tip-box mt-3">
                    <strong>Resumo comparativo:</strong>
                    <br />
                    <br />
                    <strong>Data Warehouse</strong>
                    <br />
                    dados históricos, integrados e tratados; esquema na escrita; foco em decisão estratégica.
                    <br />
                    <br />
                    <strong>Data Lake</strong>
                    <br />
                    dados brutos, estruturados e não estruturados; esquema na leitura; transformações ad hoc no acesso.
                    <br />
                    <br />
                    <strong>Data Mart</strong>
                    <br />
                    subconjunto do DW; foco em um tema ou departamento específico; acesso direcionado.
                </div>
            </NivelamentoCard>

            {/* 8) Modelagem Dimensional */}
            <Secao id="sec-modelagem" Icon={Grid3x3Gap} titulo="8. Modelagem Dimensional" />

            <NivelamentoCard title="Fato, Dimensão, Estrela e Floco de Neve">
                <p>
                    A <strong>modelagem dimensional</strong> é a abordagem mais utilizada em Data Warehouses, sendo
                    voltada especificamente ao processamento analítico. Ela é composta por{" "}
                    <strong>tabelas fato</strong> e <strong>tabelas dimensão</strong>. As tabelas fato armazenam as
                    medidas quantitativas do negócio, enquanto as tabelas dimensão armazenam dados descritivos que
                    contextualizam essas medidas.
                </p>

                <p>
                    O <strong>esquema estrela</strong> é o modelo mais comum, no qual a tabela fato ocupa a posição
                    central e se conecta diretamente às tabelas dimensão. Esse modelo oferece melhor desempenho por
                    exigir menos junções.
                </p>

                <p>
                    Já o <strong>esquema floco de neve</strong> é uma extensão do modelo estrela, com dimensões
                    normalizadas, o que reduz redundâncias, mas aumenta a complexidade e o custo das consultas.
                </p>

                <p className="mb-0">
                    A partir da modelagem dimensional, pode-se construir o chamado <strong>Cubo de Dados</strong>, uma
                    estrutura lógica utilizada em sistemas OLAP. O cubo organiza os dados da tabela fato segundo múltiplas
                    dimensões (como tempo, produto e localização), permitindo análises multidimensionais e operações como{" "}
                    <strong>drill-down</strong>, <strong>roll-up</strong>, <strong>slice</strong> e <strong>dice</strong>.
                </p>

                <div className="tip-box mt-3">
                    <strong>Resumo — Modelagem Dimensional:</strong>
                    <br />
                    <br />
                    <strong>Tabela Fato</strong>
                    <br />
                    armazena medidas quantitativas e chaves estrangeiras das dimensões.
                    <br />
                    <br />
                    <strong>Tabela Dimensão</strong>
                    <br />
                    armazena atributos descritivos que contextualizam os fatos.
                    <br />
                    <br />
                    <strong>Esquema Estrela</strong>
                    <br />
                    simples, poucas junções, melhor desempenho.
                    <br />
                    <br />
                    <strong>Esquema Floco de Neve</strong>
                    <br />
                    dimensões normalizadas, menos redundância, maior complexidade.
                    <br />
                    <br />
                    <strong>Cubo de Dados (OLAP)</strong>
                    <br />
                    estrutura multidimensional que permite análises por diferentes perspectivas.
                </div>
            </NivelamentoCard>

            {/* 9) OLAP, granularidade e soluções DW */}
            <Secao id="sec-olap" Icon={BarChartSteps} titulo="9. OLAP, Granularidade e Soluções DW" />

            <NivelamentoCard title="Operações OLAP e tipos de solução (ROLAP/MOLAP/HOLAP)">
                <p>
                    A análise dos dados do Data Warehouse é realizada por meio de operações <strong>OLAP</strong>, que
                    permitem diferentes formas de visualização, agregação e detalhamento das informações. Essas operações
                    estão diretamente relacionadas ao conceito de <strong>granularidade</strong>, que define o nível de
                    detalhe dos dados armazenados.
                </p>

                <p>
                    O <strong>drill-down</strong> permite aumentar o nível de detalhamento dos dados, passando de uma
                    visão mais agregada para uma mais detalhada (por exemplo, de ano para mês ou de mês para dia). Já o{" "}
                    <strong>roll-up</strong> realiza o movimento inverso, consolidando os dados em níveis mais agregados.
                </p>

                <p>
                    A operação <strong>slice</strong> consiste em selecionar um único valor de uma dimensão, gerando uma
                    visão parcial do cubo de dados (por exemplo, analisar as vendas de um único ano). Já o{" "}
                    <strong>dice</strong> permite selecionar múltiplos valores em uma ou mais dimensões, produzindo um
                    subcubo com critérios específicos (por exemplo, vendas de determinados produtos em regiões
                    específicas).
                </p>

                <p>
                    Além disso, a operação <strong>pivot</strong> possibilita a reorganização das dimensões do cubo de
                    dados, alterando a forma de visualização das informações sem modificar os dados em si.
                </p>

                <p className="mb-0">
                    Quanto às soluções de Data Warehouse, destacam-se o <strong>ROLAP</strong>, baseado em bancos de dados
                    relacionais, o <strong>MOLAP</strong>, que utiliza estruturas multidimensionais, e o{" "}
                    <strong>HOLAP</strong>, que combina características das duas abordagens. Essas classificações são
                    recorrentes nas provas da <strong>CESGRANRIO</strong>.
                </p>

                <div className="tip-box mt-3">
                    <strong>Resumo — Operações OLAP:</strong>
                    <br />
                    <br />
                    <strong>Drill-down</strong>
                    <br />
                    aumenta o nível de detalhe (mais granular).
                    <br />
                    <br />
                    <strong>Roll-up</strong>
                    <br />
                    reduz o nível de detalhe, consolidando os dados.
                    <br />
                    <br />
                    <strong>Slice</strong>
                    <br />
                    seleciona um único valor de uma dimensão.
                    <br />
                    <br />
                    <strong>Dice</strong>
                    <br />
                    seleciona múltiplos valores em uma ou mais dimensões.
                    <br />
                    <br />
                    <strong>Pivot</strong>
                    <br />
                    reorganiza a visualização das dimensões.
                </div>
            </NivelamentoCard>

            {/* 10) OLTP × OLAP */}
            <Secao id="sec-oltp-olap" Icon={ArrowDownUp} titulo="10. OLTP × OLAP" />

            <NivelamentoCard title="Transações vs Análises (pegadinha clássica de prova)">
                <p>
                    Os sistemas <strong>OLTP (Online Transaction Processing)</strong> e{" "}
                    <strong>OLAP (Online Analytical Processing)</strong> possuem finalidades distintas dentro da
                    arquitetura de dados de uma organização. Enquanto o OLTP está voltado às operações do dia a dia, o
                    OLAP é direcionado à análise de dados e ao apoio à tomada de decisão.
                </p>

                <p>
                    Os sistemas OLTP lidam com um grande volume de transações curtas, envolvendo operações frequentes de
                    inserção, atualização e remoção de dados. Já os sistemas OLAP realizam consultas complexas, com
                    múltiplas agregações, acessando dados históricos armazenados em Data Warehouses.
                </p>

                <p className="mb-0">
                    Outra diferença relevante está na estrutura dos dados. O OLTP utiliza modelos altamente normalizados,
                    visando integridade e desempenho transacional. O OLAP, por sua vez, utiliza <strong>modelagem
                        dimensional</strong>, com tabelas fato e dimensão, otimizadas para consultas analíticas.
                </p>

                <div className="tip-box mt-3">
                    <strong>Resumo comparativo — OLTP × OLAP:</strong>
                    <br />
                    <br />
                    <strong>OLTP</strong>
                    <br />
                    foco operacional; dados atuais; transações frequentes; muitas operações INSERT/UPDATE/DELETE; modelo
                    normalizado.
                    <br />
                    <br />
                    <strong>OLAP</strong>
                    <br />
                    foco analítico; dados históricos; consultas complexas; poucas alterações; modelagem dimensional.
                    <br />
                    <br />
                    <strong>Objetivo principal</strong>
                    <br />
                    OLTP → executar operações do negócio – transações (transactions)
                    <br />
                    OLAP → apoiar decisões gerenciais e estratégicas – análises (analytics)
                </div>
            </NivelamentoCard>

            {/* 11) Checklist final */}
            <Secao id="sec-checklist" Icon={Check2Circle} titulo="11. Resumo Final — Data Warehouse (Checklist de Prova)" />

            <NivelamentoCard title="Checklist (para revisar antes da prova)">
                <div className="tip-box">
                    <strong>1️⃣ Dados Transacionais (OLTP)</strong>
                    <br />
                    eventos individuais do negócio; dados atuais; alto nível de detalhe; muitas operações INSERT/UPDATE/DELETE; foco operacional.
                    <br /><br />

                    <strong>2️⃣ Dados Analíticos (OLAP)</strong>
                    <br />
                    dados históricos; consolidados e agregados; foco em análise, consulta e tomada de decisão.
                    <br /><br />

                    <strong>3️⃣ Data Warehouse (DW)</strong>
                    <br />
                    repositório de apoio à decisão; dados históricos, integrados, orientados à consulta; esquema na escrita (schema-on-write).
                    <br /><br />

                    <strong>Características do DW (Inmon)</strong>
                    <br />
                    • Orientado por assunto
                    <br />
                    • Integrado
                    <br />
                    • Variante no tempo (histórico)
                    <br />
                    • Não volátil (estável, sem atualizações operacionais frequentes)
                    <br /><br />

                    <strong>4️⃣ ETL</strong>
                    <br />
                    processo de alimentação do DW: Extração → Staging Area → Transformação → Carga; carga periódica; garante integração, qualidade e histórico.
                    <br /><br />

                    <strong>5️⃣ Staging Area</strong>
                    <br />
                    área intermediária temporária no ETL; reduz impacto no OLTP; facilita limpeza, padronização e reprocessamento.
                    <br /><br />

                    <strong>6️⃣ ELT</strong>
                    <br />
                    extrai, carrega os dados no destino e transforma posteriormente; comum em ambientes modernos e Big Data.
                    <br /><br />

                    <strong>7️⃣ Data Lake</strong>
                    <br />
                    armazena dados brutos (estruturados e não estruturados); esquema na leitura (schema-on-read); transformações e lógica de negócios aplicadas no acesso, geralmente de forma ad hoc e não persistida.
                    <br /><br />

                    <strong>8️⃣ Data Mart</strong>
                    <br />
                    subconjunto do Data Warehouse; foco em uma área ou departamento específico do negócio.
                    <br /><br />

                    <strong>9️⃣ Modelagem Dimensional</strong>
                    <br />
                    composta por tabelas fato (medidas) e dimensão (atributos); esquemas estrela e floco de neve; base para OLAP.
                    <br /><br />

                    <strong>🔟 Cubo de Dados</strong>
                    <br />
                    estrutura multidimensional que organiza fatos por dimensões; permite análises OLAP.
                    <br /><br />

                    <strong>1️⃣1️⃣ Operações OLAP</strong>
                    <br />
                    • Drill-down → mais detalhe
                    <br />
                    • Roll-up → mais agregação
                    <br />
                    • Slice → um valor de uma dimensão
                    <br />
                    • Dice → múltiplos valores/dimensões
                    <br />
                    • Pivot → reorganização da visualização
                    <br /><br />

                    <strong>1️⃣2️⃣ OLTP × OLAP</strong>
                    <br />
                    OLTP → operações do negócio – transações (transactions)
                    <br />
                    OLAP → apoio à decisão – análises (analytics)
                </div>
            </NivelamentoCard>

            {/* Questões */}
            <Secao id="sec-questoes" Icon={Database} titulo="Agora é com você" />

            <NivelamentoCard title="Questões — Data Warehouse / ETL / OLAP">
                <p className="mb-0">
                    Resolva as questões a seguir para fixar os principais conceitos de Data Warehouse, OLTP/OLAP, ETL/ELT e modelagem dimensional.
                </p>
            </NivelamentoCard>

            {questoesDataWarehouseConcurso
                .filter(q => q.exibirNoNivelamento)
                .map(q => (
                    <QuestaoCard
                        key={q.id}
                        numero={q.numero}
                        fonte={q.fonte} // aqui já está formatado
                        enunciado={q.enunciado}
                        alternativas={q.alternativas}
                        correta={q.correta}
                        comentario={q.comentario}
                    />
                ))}


        </NivelamentoLayout>
    );
}
