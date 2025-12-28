import NivelamentoLayout from "../components/nivelamento/NivelamentoLayout.jsx";
import NivelamentoCard from "../components/nivelamento/NivelamentoCard.jsx";
import QuestaoCard from "../components/nivelamento/QuestaoCard.jsx";
// import { questoesBigData } from "./questoes/questoesBigData.jsx";
import { questoesBigDataConcurso } from "../data/banco-questoes/bigdata.concurso.jsx"; // ajuste o caminho conforme sua estrutura

import { useMemo, useState } from "react";

import {
    Database,
    Diagram3,
    Boxes,
    HddNetwork,
    Diagram2,
    Cpu,
    Tools,
} from "react-bootstrap-icons";

function Secao({ id, Icon, titulo }) {
    return (
        <div id={id} className="mt-5 mb-4">
            <div className="d-flex align-items-center gap-3 border-bottom pb-2">
                <span
                    className="d-inline-flex align-items-center justify-content-center border rounded-circle"
                    style={{
                        width: 44,
                        height: 44,
                        flex: "0 0 44px",
                        background: "#fff",
                    }}
                >
                    <Icon size={22} />
                </span>

                <h3 className="m-0">{titulo}</h3>
            </div>
        </div>
    );
}


function LacunaCard({ numero, enunciado, opcoes, correta, explicacao }) {
    const [valor, setValor] = useState("");
    const [status, setStatus] = useState("idle"); // idle | ok | no | empty

    const feedback = useMemo(() => {
        if (status === "idle") return null;

        if (status === "empty") {
            return (
                <div className="alert alert-warning mt-3 mb-0">
                    Selecione uma opção para verificar sua resposta.
                </div>
            );
        }
        if (status === "ok") {
            return (
                <div className="alert alert-success mt-3 mb-0">
                    <strong>Correto!</strong> {explicacao}
                </div>
            );
        }
        return (
            <div className="alert alert-danger mt-3 mb-0">
                <strong>Incorreto.</strong> A resposta correta é <strong>{correta}</strong>.
                <div className="mt-2">{explicacao}</div>
            </div>
        );
    }, [status, correta, explicacao]);

    function verificar() {
        if (!valor) return setStatus("empty");
        setStatus(valor === correta ? "ok" : "no");
    }

    function limpar() {
        setValor("");
        setStatus("idle");
    }

    return (
        <div className="card nivelamento-card mb-4 border-start border-4 border-success">
            <div className="card-body">
                <h4 className="mb-3">
                    <i className="bi bi-pencil-square me-2 text-success"></i>
                    Exercício de Fixação {numero}
                </h4>

                <div className="alert alert-light border mb-3">
                    <i className="bi bi-check2-circle me-2"></i>
                    Complete corretamente o conceito abaixo:
                </div>

                <p className="mb-0">
                    {enunciado}{" "}
                    <select
                        className={[
                            "form-select d-inline-block w-auto mx-2",
                            status === "ok" ? "is-valid" : "",
                            status === "no" ? "is-invalid" : "",
                        ].join(" ")}
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                    >
                        <option value="">---</option>
                        {opcoes.map((o) => (
                            <option key={o} value={o}>
                                {o}
                            </option>
                        ))}
                    </select>
                    .
                </p>

                <div className="d-flex gap-2 mt-3 flex-wrap">
                    <button className="btn btn-outline-success" type="button" onClick={verificar}>
                        <i className="bi bi-search me-2"></i>Verificar resposta
                    </button>
                    <button className="btn btn-outline-secondary" type="button" onClick={limpar}>
                        Limpar
                    </button>
                </div>

                {feedback}
            </div>
        </div>
    );
}

const lacunas5Vs = [
    {
        numero: 1,
        enunciado: (
            <>
                O V do Big Data que se refere à <strong>diversidade de formatos e tipos de dados</strong> (textos,
                imagens, vídeos, áudios e logs) é chamado de
            </>
        ),
        correta: "Variedade",
        explicacao: (
            <>
                <strong>Variedade</strong> = diferentes formatos/estruturas de dados (estruturados, semiestruturados e não estruturados).
            </>
        ),
    },
    {
        numero: 2,
        enunciado: (
            <>
                O V do Big Data associado à <strong>rapidez</strong> com que os dados são gerados, transmitidos e
                precisam ser processados é denominado
            </>
        ),
        correta: "Velocidade",
        explicacao: (
            <>
                <strong>Velocidade</strong> = fluxo alto/contínuo de dados, exigindo processamento rápido (muitas vezes em tempo quase real).
            </>
        ),
    },
    {
        numero: 3,
        enunciado: (
            <>
                O V do Big Data relacionado à <strong>grande quantidade de dados</strong> gerados e armazenados,
                ultrapassando soluções tradicionais, é conhecido como
            </>
        ),
        correta: "Volume",
        explicacao: (
            <>
                <strong>Volume</strong> = massa de dados muito grande, que demanda armazenamento/processamento distribuído.
            </>
        ),
    },
    {
        numero: 4,
        enunciado: (
            <>
                O V do Big Data que trata da <strong>qualidade, confiabilidade e consistência</strong> dos dados,
                indicando o grau de confiança na análise, chama-se
            </>
        ),
        correta: "Veracidade",
        explicacao: (
            <>
                <strong>Veracidade</strong> = dados podem ser incompletos, ruidosos ou inconsistentes; exige limpeza e validação.
            </>
        ),
    },
    {
        numero: 5,
        enunciado: (
            <>
                O V do Big Data ligado à <strong>capacidade de extrair informações úteis</strong> para apoiar a tomada
                de decisão é denominado
            </>
        ),
        correta: "Valor",
        explicacao: (
            <>
                <strong>Valor</strong> = dado só “vale” quando gera informação útil, insight e benefício para o negócio/decisão.
            </>
        ),
    },
];

const opcoes5Vs = ["Variedade", "Valor", "Veracidade", "Volume", "Velocidade"];

const questaoAssociacao5Vs = {
    numero: 6,
    
    fonte: "Fixação — 5 V’s do Big Data",
    enunciado: (
        <>
            <p className="mb-2">
                Considere os conceitos relacionados ao Big Data apresentados a seguir.
            </p>

            <p className="mb-2"><strong>Coluna I</strong></p>
            <ul>
                <li>I – Variedade</li>
                <li>II – Valor</li>
                <li>III – Veracidade</li>
                <li>IV – Volume</li>
                <li>V – Velocidade</li>
            </ul>

            <p className="mb-2"><strong>Coluna II</strong></p>
            <ul className="mb-0">
                <li>(    ) Refere-se à utilidade dos dados após o processamento, quando geram informações relevantes para apoiar a tomada de decisão.</li>
                <li>(    ) Diz respeito à confiabilidade e à qualidade dos dados, considerando ruídos, inconsistências e incertezas.</li>
                <li>(    ) Relaciona-se à grande quantidade de dados gerados e armazenados, superando a capacidade das soluções tradicionais.</li>
                <li>(    ) Representa a diversidade de formatos e tipos de dados, como textos, imagens, vídeos, áudios e logs.</li>
                <li>(    ) Indica a rapidez com que os dados são produzidos, transmitidos e precisam ser processados.</li>
            </ul>

            <p className="mt-3 mb-0">
                Assinale a alternativa que apresenta a <strong>ordem correta</strong>, de cima para baixo, da Coluna II.
            </p>
        </>
    ),
    alternativas: [
        "III – II – I – IV – V",
        "II – IV – III – I – V",
        "I – II – III – IV – V",
        "II – III – IV – I – V",
        "II – III – I – IV – V",
    ],
    correta: "D",
    comentario: (
        <>
            <p className="mb-2">
                A Coluna II descreve, na ordem:
            </p>
            <ul className="mb-2">
                <li><strong>Valor</strong> → II</li>
                <li><strong>Veracidade</strong> → III</li>
                <li><strong>Volume</strong> → IV</li>
                <li><strong>Variedade</strong> → I</li>
                <li><strong>Velocidade</strong> → V</li>
            </ul>
            <p className="mb-0">
                Logo, a sequência correta é <strong>II – III – IV – I – V</strong> (alternativa <strong>D</strong>).
            </p>
        </>
    ),
};




export default function BigData() {
    return (
        <NivelamentoLayout
            title="BIG DATA"
            subtitle="Resumo direto para prova, com foco em como a Cesgranrio costuma cobrar."
            coverSrc="/nivelamento/ti/big-data.png"
            breadcrumbs={[
                { label: "Início", href: "/index.html" },
                { label: "Dashboard", href: "/dashboard.html" },
                { label: "Tecnologia da Informação", href: "/nivelamento/ti/" },
                { label: "BIG DATA" },
            ]}
        >
            {/* 1. Fundamentos */}
            <Secao id="sec-fundamentos" Icon={Database} titulo="1. Fundamentos de Big Data" />

            <NivelamentoCard title="Big Data — Conceito">
                <p>
                    <strong>Big Data</strong> é um termo utilizado na área de tecnologia da informação para
                    descrever um <strong>grande volume de dados variados</strong>, incluindo dados
                    <strong> estruturados e não estruturados</strong>, que{" "}
                    <strong>não podem ser processados de forma eficiente por ferramentas tradicionais</strong>.
                </p>

                <p className="mb-0">
                    Em termos práticos, quando o modelo tradicional — baseado em
                    <strong> um único servidor</strong> e <strong>bancos de dados relacionais</strong> —
                    deixa de atender às necessidades de armazenamento e processamento, surge o
                    cenário de <strong>processamento distribuído</strong>, característico do Big Data.
                </p>

                <p className="mb-0">
                    <br />
                    Em síntese, Big Data surge quando o volume, a variedade e a velocidade dos dados
                    ultrapassam a capacidade das soluções tradicionais, exigindo arquiteturas
                    distribuídas para armazenamento e processamento.
                </p>
            </NivelamentoCard>

            {/* 5 V's*/}

            <NivelamentoCard title="Big Data — Os 5 V’s">
                <ul className="mb-0">
                    <li>
                        <strong>Variedade:</strong> diversidade de tipos e formatos de dados, como textos,
                        imagens, vídeos, áudios e logs.
                        <br />
                        Ou seja, os dados não seguem um único padrão ou formato.
                    </li>
                    <li>
                        <strong>Valor:</strong> capacidade de extrair informações relevantes e úteis
                        para apoio à tomada de decisão.
                        <br />
                        Ou seja, os dados devem possuir <strong>aplicabilidade</strong>.
                    </li>
                    <li>
                        <strong>Veracidade:</strong> qualidade, confiabilidade e consistência dos dados,
                        representando o grau de confiança que se pode ter nas informações analisadas.
                        <br />
                        Ou seja, nem todo dado disponível é confiável ou adequado para análise.
                    </li>
                    <li>
                        <strong>Volume:</strong> grande quantidade de dados gerados e armazenados.
                        <br />
                        Ou seja, trata-se de massas de dados que ultrapassam a capacidade das soluções
                        tradicionais.
                    </li>
                    <li>
                        <strong>Velocidade:</strong> rapidez com que os dados são gerados, transmitidos
                        e precisam ser processados.
                        <br />
                        Ou seja, os dados são produzidos continuamente e em alta taxa.
                    </li>
                </ul>

                <p className="mt-2 mb-0">
                    Os 5 V’s ajudam a explicar por que grandes volumes de dados não podem ser tratados
                    por soluções tradicionais de armazenamento e processamento.
                </p>

                <p className="mt-2 mb-0">
                    A <strong>variedade</strong> e a <strong>veracidade</strong> dos dados em Big Data
                    resultam em alta <strong>complexidade das fontes de informação</strong>, exigindo
                    processos de <strong>limpeza</strong>, <strong>integração</strong> e
                    <strong> transformação</strong> antes da análise.
                </p>
            </NivelamentoCard>

            <NivelamentoCard title="Fixação — Os 5 V’s (lacunas)">
                <p className="mb-0 text-muted">
                    Complete as lacunas escolhendo o V correto. Depois clique em <strong>Verificar resposta</strong>.
                </p>
            </NivelamentoCard>

            {/* Questões de Fixação - lacunas */}
            {lacunas5Vs.map((q) => (
                <LacunaCard
                    key={q.numero}
                    numero={q.numero}
                    enunciado={q.enunciado}
                    opcoes={opcoes5Vs}
                    correta={q.correta}
                    explicacao={q.explicacao}
                />
            ))}

            {/* Questão de associação - 5 V's */}
            <NivelamentoCard title="Fixação — Associação (5 V’s)">
                <p className="mb-0">
                    Agora, vamos subir um nível: associe os conceitos e marque a alternativa com a ordem correta.
                </p>
            </NivelamentoCard>

            <QuestaoCard
                numero={questaoAssociacao5Vs.numero}
                rotulo="Exercício de Fixação" 
                fonte={questaoAssociacao5Vs.fonte}
                enunciado={questaoAssociacao5Vs.enunciado}
                alternativas={questaoAssociacao5Vs.alternativas}
                correta={questaoAssociacao5Vs.correta}
                comentario={questaoAssociacao5Vs.comentario}
            />


            {/* Dados Estruturados, Não Estruturados e Semi-Estruturados */}

            <NivelamentoCard title="Dados Estruturados, Não Estruturados e Semi-Estruturados">
                <p className="mb-0">
                    Uma parte fundamental do Big Data é compreender <strong>como os dados são organizados</strong>,
                    isto é, se possuem estrutura rígida, flexível ou inexistente. Essa característica influencia
                    diretamente as <strong>tecnologias utilizadas para armazenamento, processamento e análise.</strong>
                </p>

                <h5 className="mb-3">
                    <br />
                    Dados Estruturados
                </h5>
                <ul className="mb-0">
                    <li>São organizados segundo um modelo previamente definido.</li>
                    <li>Possuem estrutura rígida.</li>
                    <li>Facilitam o acesso, a consulta e a recuperação das informações.</li>
                    <li>São comuns em bancos de dados relacionais.</li>
                    <li>
                        <strong>Exemplos:</strong> tabelas de clientes, registros de vendas,
                        cadastros em bancos de dados relacionais.
                    </li>
                </ul>

                <h5 className="mb-3">
                    <br />
                    Dados Não Estruturados
                </h5>
                <ul className="mb-0">
                    <li>Não seguem um modelo ou esquema predefinido.</li>
                    <li>Não possuem estrutura fixa.</li>
                    <li>São mais difíceis de armazenar, consultar e analisar.</li>
                    <li>Exigem técnicas e ferramentas específicas no contexto de Big Data.</li>
                    <li>
                        <strong>Exemplos:</strong> textos livres, imagens, vídeos, áudios,
                        postagens em redes sociais.
                    </li>
                </ul>

                <h5 className="mb-3">
                    <br />
                    Dados Semi-Estruturados
                </h5>
                <ul className="mb-0">
                    <li>Possuem estrutura flexível e heterogênea.</li>
                    <li>Cada campo de dados possui organização própria.</li>
                    <li>Não há imposição rígida de formato, como ocorre no modelo relacional.</li>
                    <li>Situam-se entre os dados estruturados e os não estruturados.</li>
                    <li>
                        <strong>Exemplos:</strong> arquivos <strong>XML</strong>, <strong>JSON</strong>,
                        logs estruturados e documentos com marcações.
                    </li>
                </ul>
            </NivelamentoCard>


            <QuestaoCard
                numero={7}
                rotulo="Exercício de Fixação"
                fonte="Big Data — Tipos de Dados"
                enunciado={
                    <>
                        <p className="mb-2">
                            Considere os tipos de dados utilizados em ambientes de Big Data
                            e suas respectivas características.
                        </p>

                        <p className="mb-1"><strong>Coluna I</strong></p>
                        <ul>
                            <li>I – Dados Estruturados</li>
                            <li>II – Dados Não Estruturados</li>
                            <li>III – Dados Semi-estruturados</li>
                        </ul>

                        <p className="mb-1"><strong>Coluna II</strong></p>
                        <ul className="mb-0">
                            <li>( ) Apresentam estrutura flexível, situando-se entre os dados estruturados e os não estruturados, como arquivos XML e JSON.</li>
                            <li>( ) Não seguem um esquema predefinido, como textos livres, imagens, vídeos e áudios.</li>
                            <li>( ) Possuem estrutura rígida, organizada segundo um modelo previamente definido, sendo comuns em bancos de dados relacionais.</li>
                        </ul>

                        <p className="mt-2 mb-0">
                            Assinale a alternativa que apresenta a associação correta,
                            de cima para baixo, da Coluna II.
                        </p>
                    </>
                }
                alternativas={[
                    "I – II – III",
                    "I – III – II",
                    "III – II – I",
                    "II – III – I",
                    "III – I – II",
                ]}
                correta="C"
                comentario={
                    <>
                        <ul className="mb-0">
                            <li><strong>I – Dados Estruturados</strong> → esquema rígido e bancos relacionais.</li>
                            <li><strong>II – Dados Não Estruturados</strong> → textos, imagens, vídeos.</li>
                            <li><strong>III – Dados Semi-estruturados</strong> → estrutura flexível (XML, JSON).</li>
                        </ul>
                    </>
                }
            />


            {/* 2. Tradicional -> Distribuído */}
            <Secao
                id="sec-tradicional-distribuido"
                Icon={Diagram3}
                titulo="2. Do Modelo Tradicional ao Processamento Distribuído"
            />

            <NivelamentoCard title="Servidor (Modelo Tradicional)">
                <p>
                    Antes do cenário distribuído característico do Big Data, o modelo predominante
                    consistia em concentrar recursos computacionais em um
                    <strong> servidor único e robusto</strong>.
                </p>
                <ul className="mb-0">
                    <li>Servidor centralizado e confiável (alto desempenho).</li>
                    <li>Escalabilidade vertical (upgrade de hardware).</li>
                    <li>Sistema operacional (Windows, Linux).</li>
                    <li>Sistema de arquivos (NTFS, EXT4).</li>
                    <li>Banco de dados relacional (MySQL, SQL Server, PostgreSQL, Oracle).</li>
                </ul>
            </NivelamentoCard>

            <NivelamentoCard title="Clusters">
                <p>
                    Em ambientes de <strong>Big Data</strong>, é comum o uso de <strong>clusters</strong>,
                    que consistem em um conjunto de servidores interligados e trabalhando de forma
                    cooperativa. Cada servidor do cluster é chamado de <strong>nó</strong>
                    (<em>node</em>, <em>nodo</em>).
                </p>

                <h6 className="mb-2">Características</h6>
                <ul className="mb-0">
                    <li>Alto desempenho.</li>
                    <li>Alta disponibilidade.</li>
                    <li>Balanceamento de carga (<em>load balancing</em>).</li>
                    <li>Processamento em paralelo.</li>
                    <li>Escalabilidade horizontal.</li>
                </ul>
            </NivelamentoCard>

            <LacunaCard
                numero={8}
                enunciado={
                    <>
                        Um agente de tecnologia da informação atua em uma área do
                        <strong> Banco do Brasil</strong> responsável pelo processamento de
                        grandes volumes de dados. Inicialmente, as aplicações eram executadas
                        em um <strong>servidor único</strong>, que concentrava todo o
                        processamento e o armazenamento.
                        <br /><br />
                        Com o aumento significativo do volume de dados e da demanda por
                        <strong> maior desempenho, alta disponibilidade, processamento em paralelo
                            e escalabilidade</strong>, verificou-se que o modelo tradicional não
                        atendia mais às necessidades do ambiente.
                        <br /><br />
                        Diante desse cenário, o servidor orientou o seu gestor que a tecnologia mais adequada a ser adotada é o
                    </>
                }
                opcoes={[
                    "Servidor",
                    "Cluster",
                    "Banco de dados relacional",
                    "Sistema operacional",
                    "Sistema de arquivos",
                ]}
                correta="Cluster"
                explicacao={
                    <>
                        O <strong>cluster</strong> é formado por um conjunto de servidores
                        (nós) que trabalham de forma cooperativa, permitindo
                        <strong> processamento distribuído e paralelo</strong>,
                        <strong> escalabilidade horizontal</strong>,
                        <strong> balanceamento de carga</strong> e
                        <strong> alta disponibilidade</strong>.
                        <br /><br />
                        Essas características tornam os clusters mais adequados do que um
                        servidor único em cenários de <strong>Big Data</strong>.
                    </>
                }
            />

            {/* 3. Hadoop */}
            <Secao id="sec-hadoop" Icon={Boxes} titulo="3. Hadoop e o Processamento Distribuído" />

            <NivelamentoCard title="Hadoop — Visão Geral">
                <p>
                    O <strong>Hadoop</strong> é um <strong>framework</strong>, composto por um conjunto
                    de ferramentas (um <strong>ecossistema</strong>), voltado ao
                    <strong> armazenamento e processamento distribuído</strong> de
                    grandes volumes de dados.
                </p>

                <h6 className="mb-2">Características</h6>
                <ul className="mb-0">
                    <li>Open Source.</li>
                    <li>Desenvolvido majoritariamente em <strong>Java</strong>.</li>
                    <li>
                        Permite o uso de outras linguagens, como <strong>Python</strong>,
                        para a criação de tarefas de processamento de dados.
                    </li>
                    <li>
                        Ecossistema composto por ferramentas como <strong>HDFS</strong> (armazenamento) e{" "}
                        <strong>MapReduce</strong> (processamento).
                    </li>
                    <li>Processamento em paralelo.</li>
                    <li>Baseado na utilização de clusters.</li>
                </ul>

                <p className="mt-3 mb-0">
                    Embora o núcleo do Hadoop seja implementado em Java, linguagens como
                    Python podem ser utilizadas para escrever <em>jobs</em> e scripts que
                    executam sobre sua infraestrutura, sem modificar sua implementação interna.
                </p>
            </NivelamentoCard>

            <LacunaCard
                numero={9}
                enunciado={
                    <>
                        O <strong>Hadoop</strong> é um <strong>[1]</strong> voltado ao
                        <strong> armazenamento e processamento distribuído</strong> de grandes
                        volumes de dados, baseado na utilização de <strong>clusters</strong>.
                    </>
                }
                opcoes={[
                    "framework",
                    "sistema operacional",
                    "banco de dados relacional",
                    "sistema de arquivos local",
                ]}
                correta="framework"
                explicacao={
                    <>
                        O Hadoop é um <strong>framework</strong> composto por um ecossistema de
                        ferramentas, como HDFS e MapReduce, utilizado em ambientes de Big Data.
                    </>
                }
            />


            {/* 4. Armazenamento */}
            <Secao id="sec-armazenamento" Icon={HddNetwork} titulo="4. Armazenamento Distribuído no Hadoop" />

            <NivelamentoCard title="Armazenamento no Hadoop — HDFS">
                <p>
                    O <strong>HDFS</strong> (<em>Hadoop Distributed File System</em>) é um sistema de
                    arquivos distribuído, projetado para armazenar grandes volumes de dados
                    de forma distribuída em um cluster, sendo otimizado para alto desempenho
                    na leitura e escrita de arquivos de grande porte.
                </p>

                <ul className="mb-0">
                    <li>
                        <strong>NameNode:</strong> gerencia os <strong>metadados</strong> do sistema
                        de arquivos, como nomes, localização e permissões dos arquivos.
                    </li>
                    <li>
                        <strong>DataNode:</strong> armazena efetivamente os dados, mantendo
                        os blocos de arquivos distribuídos pelo cluster.
                    </li>
                </ul>
            </NivelamentoCard>

            <NivelamentoCard title="YARN">
                <p>
                    O <strong>YARN</strong> (<em>Yet Another Resource Negotiator</em>) é o componente
                    do Hadoop responsável pelo <strong>gerenciamento e agendamento dos recursos
                        computacionais</strong> do cluster.
                </p>

                <p className="mb-0">
                    Ele separa o gerenciamento de recursos do processamento, permitindo que
                    diferentes aplicações sejam executadas de forma eficiente sobre a
                    infraestrutura do Hadoop.
                </p>
            </NivelamentoCard>

            {/* NTFS x HDFS x YARN + TABELA */}
            <NivelamentoCard title="NTFS, HDFS e YARN — Entendendo as Diferenças">
                <p>
                    O <strong>NTFS</strong> é um sistema de arquivos utilizado no sistema operacional
                    Windows para organizar o disco rígido e permitir o armazenamento e a recuperação
                    de arquivos em um <strong>computador único</strong>.
                </p>

                <p>
                    De forma análoga, o <strong>HDFS</strong> (<em>Hadoop Distributed File System</em>)
                    é um sistema de arquivos <strong>distribuído</strong>, projetado para organizar
                    a estrutura de um <strong>cluster</strong> e permitir o armazenamento de grandes
                    volumes de dados de forma distribuída.
                </p>

                <p>
                    No HDFS, os arquivos são divididos em <strong>blocos</strong> e distribuídos entre
                    diversos servidores (<strong>DataNodes</strong>), possibilitando o
                    <strong> processamento paralelo e distribuído</strong>.
                </p>

                <p>A arquitetura do HDFS baseia-se principalmente em dois componentes:</p>

                <ul>
                    <li>
                        <strong>NameNode:</strong> responsável por gerenciar os
                        <strong> metadados</strong> do sistema de arquivos, como nomes dos arquivos,
                        localização dos blocos, permissões e fator de replicação.
                    </li>

                    <li>
                        <strong>DataNodes:</strong> responsáveis por <strong>armazenar
                            os dados</strong>, mantendo os blocos distribuídos
                        pelo cluster e executando operações de leitura e escrita.
                    </li>
                </ul>

                <p>
                    O HDFS garante <strong>tolerância a falhas</strong> por meio da
                    <strong> replicação dos blocos</strong> em diferentes DataNodes, permitindo que
                    os dados permaneçam disponíveis mesmo quando um nó falha.
                </p>

                <p className="mb-0">
                    O <strong>YARN</strong> é responsável pelo <strong>gerenciamento e agendamento dos recursos computacionais </strong>
                    do cluster, como CPU e memória, viabilizando a execução eficiente das
                    aplicações distribuídas.
                </p>

                <div className="alert alert-light border mt-3 mb-0">
                    <strong>Resumo prático:</strong>
                    <ul className="mb-0 mt-2">
                        <li>
                            <strong>NameNode</strong> → gerenciamento de <strong>metadados</strong>
                        </li>
                        <li>
                            <strong>DataNodes</strong> → <strong>armazenamento dos dados</strong>
                        </li>
                        <li>
                            <strong>YARN</strong> → gerenciamento dos <strong>recursos computacionais do cluster</strong>
                        </li>
                    </ul>
                </div>

            </NivelamentoCard>

            <QuestaoCard
                numero={10}
                rotulo="Exercício de Fixação"
                fonte="Big Data — HDFS e YARN"
                enunciado={
                    <>
                        <p className="mb-2">
                            Considere os componentes do Hadoop apresentados a seguir.
                        </p>

                        <p><strong>Coluna I</strong></p>
                        <ul>
                            <li>I – NameNode</li>
                            <li>II – DataNode</li>
                            <li>III – YARN</li>
                        </ul>

                        <p><strong>Coluna II</strong></p>
                        <ul className="mb-0">
                            <li>( ) Gerencia os metadados do sistema de arquivos distribuído.</li>
                            <li>( ) Armazena efetivamente os blocos de dados no cluster.</li>
                            <li>( ) Gerencia e agenda os recursos computacionais do cluster.</li>
                        </ul>

                        <p className="mt-2 mb-0">
                            Assinale a alternativa que apresenta a associação correta,
                            de cima para baixo.
                        </p>
                    </>
                }
                alternativas={[
                    "I – II – III",
                    "I – III – II",
                    "II – I – III",
                    "II – III – I",
                    "III – I – II",
                ]}
                correta="A"
                comentario={
                    <>
                        <ul className="mb-0">
                            <li><strong>I – NameNode</strong> → metadados.</li>
                            <li><strong>II – DataNode</strong> → armazenamento dos dados.</li>
                            <li><strong>III – YARN</strong> → gerenciamento de recursos.</li>
                        </ul>
                    </>
                }
            />

            <NivelamentoCard title="Comparativo — NTFS × HDFS">
                <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Aspecto</th>
                                <th>NTFS</th>
                                <th>HDFS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Tipo</strong></td>
                                <td>Sistema de arquivos local</td>
                                <td>Sistema de arquivos distribuído</td>
                            </tr>

                            <tr>
                                <td><strong>Ambiente</strong></td>
                                <td>Computador único</td>
                                <td>Cluster de computadores</td>
                            </tr>

                            <tr>
                                <td><strong>Armazenamento</strong></td>
                                <td>Centralizado</td>
                                <td>Distribuído em vários nós</td>
                            </tr>

                            <tr>
                                <td><strong>Divisão de arquivos</strong></td>
                                <td>Não</td>
                                <td>Sim, em blocos</td>
                            </tr>

                            <tr>
                                <td><strong>Replicação de dados</strong></td>
                                <td>Não nativa</td>
                                <td>Sim, para tolerância a falhas</td>
                            </tr>

                            <tr>
                                <td><strong>Tolerância a falhas</strong></td>
                                <td>Limitada</td>
                                <td>Alta</td>
                            </tr>

                            <tr>
                                <td><strong>Processamento</strong></td>
                                <td>Sequencial</td>
                                <td>Paralelo e distribuído</td>
                            </tr>

                            <tr>
                                <td><strong>Uso típico</strong></td>
                                <td>Sistemas operacionais</td>
                                <td>Big Data / Hadoop</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </NivelamentoCard>

            {/* 5. Componentes do HDFS */}
            <Secao id="sec-componentes-hdfs" Icon={Diagram2} titulo="5. Componentes do HDFS" />

            <NivelamentoCard title="NameNode">
                <p>
                    O <strong>NameNode</strong> reside no nó mestre (<strong>Master Node</strong>) e é
                    responsável por gerenciar os <strong>metadados</strong> do sistema de arquivos
                    distribuído HDFS.
                </p>

                <ul className="mb-0">
                    <li>Manter informações sobre nomes e permissões dos arquivos.</li>
                    <li>Mapear a localização dos blocos de dados no cluster.</li>
                    <li>Gerenciar a divisão dos arquivos em blocos.</li>
                    <li>Controlar a política e a localização das réplicas.</li>
                    <li>Coordenar a comunicação com os <em>DataNodes</em>.</li>
                    <li>
                        Mantém os metadados principalmente em memória para garantir alto desempenho,
                        pois é constantemente acessado.
                    </li>
                </ul>
            </NivelamentoCard>

            {/* DATANODES */}
            <NivelamentoCard title="DataNodes">
                <p>
                    Os <strong>DataNodes</strong> são responsáveis por armazenar
                    <strong> efetivamente os dados</strong> nos nós do cluster.
                    Como o HDFS é distribuído, os arquivos são divididos em
                    <strong> blocos</strong> e replicados em diferentes máquinas,
                    garantindo tolerância a falhas e disponibilidade.
                </p>

                <p className="mb-0">
                    O <strong>NameNode</strong> mantém os <strong>metadados</strong>,
                    como nome dos arquivos, quantidade de blocos, fator de replicação
                    e localização dos blocos, permitindo a recuperação eficiente dos dados.
                </p>
            </NivelamentoCard>

            <LacunaCard
                numero={11}
                enunciado={
                    <>
                        No HDFS, o componente responsável por
                        <strong> armazenar efetivamente os dados</strong>, mantendo os
                        blocos distribuídos pelo cluster, é o
                    </>
                }
                opcoes={[
                    "NameNode",
                    "DataNode",
                    "YARN",
                    "Hadoop",
                ]}
                correta="DataNode"
                explicacao={
                    <>
                        Os <strong>DataNodes</strong> armazenam os blocos de dados, enquanto
                        o NameNode mantém apenas os metadados do sistema.
                    </>
                }
            />

            {/* 6. Data Lake */}
            <Secao id="sec-datalake" Icon={Database} titulo="Data Lake" />

            <NivelamentoCard title="6. Data Lake — Conceito">
                <p>
                    Um <strong>Data Lake</strong> é um repositório centralizado destinado ao
                    <strong> armazenamento de grandes volumes de dados</strong> em seu
                    <strong> formato original</strong>, ou seja, <strong>dados brutos</strong>,
                    sem a necessidade de um esquema previamente definido.
                </p>

                <p className="mb-0">
                    Diferentemente dos modelos tradicionais, no Data Lake os dados podem ser
                    armazenados de forma <strong>estruturada, semiestruturada ou não estruturada</strong>,
                    sendo preparados e transformados <strong>somente no momento da análise</strong>.
                </p>
            </NivelamentoCard>

            <NivelamentoCard title="Principais Características do Data Lake">
                <ul className="mb-0">
                    <li>
                        Armazena <strong>dados brutos</strong>, sem tratamento prévio.
                    </li>
                    <li>
                        Suporta dados <strong>estruturados, semiestruturados e não estruturados</strong>.
                    </li>
                    <li>
                        Utiliza o conceito de <strong>schema-on-read </strong>
                        (o esquema é definido no momento da leitura).
                    </li>
                    <li>
                        Voltado a cenários de <strong>Big Data</strong>, análise exploratória,
                        ciência de dados e aprendizado de máquina.
                    </li>
                    <li>
                        Geralmente implementado sobre <strong>HDFS</strong> ou sistemas de
                        armazenamento distribuído equivalentes.
                    </li>
                </ul>
            </NivelamentoCard>

            <NivelamentoCard title="Data Lake × Data Warehouse">
                <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Aspecto</th>
                                <th>Data Lake</th>
                                <th>Data Warehouse</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Tipo de dados</strong></td>
                                <td>Brutos (raw data)</td>
                                <td>Tratados e consolidados</td>
                            </tr>
                            <tr>
                                <td><strong>Estrutura</strong></td>
                                <td>Estruturados, semi e não estruturados</td>
                                <td>Principalmente estruturados</td>
                            </tr>
                            <tr>
                                <td><strong>Esquema</strong></td>
                                <td>Schema-on-read</td>
                                <td>Schema-on-write</td>
                            </tr>
                            <tr>
                                <td><strong>Finalidade</strong></td>
                                <td>Análise exploratória, Big Data, Data Science</td>
                                <td>Análise gerencial e tomada de decisão</td>
                            </tr>
                            <tr>
                                <td><strong>Tecnologias comuns</strong></td>
                                <td>HDFS, Hadoop, Spark</td>
                                <td>SQL, OLAP, DW tradicional</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </NivelamentoCard>

            <NivelamentoCard title="Resumo para Prova — Data Lake">
                <div className="alert alert-light border mb-0">
                    <p className="mb-1">
                        <strong>Data Lake</strong> → armazena <strong>dados brutos</strong>
                    </p>
                    <p className="mb-1">
                        <strong>Schema-on-read</strong> → esquema definido na leitura
                    </p>
                    <p className="mb-1">
                        <strong>Big Data</strong> → grande volume, variedade e velocidade
                    </p>
                    <p className="mb-0">
                        <strong>Data Warehouse</strong> → dados tratados e estruturados
                    </p>
                </div>
            </NivelamentoCard>

            <LacunaCard
                numero={12}
                enunciado={
                    <>
                        Diferentemente de um <strong>Data Warehouse</strong>, o
                        <strong> Data Lake</strong> armazena dados em seu
                        <strong> formato original</strong>, utilizando o conceito de
                    </>
                }
                opcoes={[
                    "schema-on-read",
                    "schema-on-write",
                    "normalização",
                    "modelagem dimensional",
                ]}
                correta="schema-on-read"
                explicacao={
                    <>
                        No Data Lake, o esquema é definido no momento da leitura
                        (<strong>schema-on-read</strong>), permitindo flexibilidade para
                        análise de dados brutos.
                    </>
                }
            />

            {/* 7. Técnicas de Preparação de Dados */}
            <Secao
                id="sec-preparacao-dados"
                Icon={Tools}
                titulo="7. Técnicas de Preparação de Dados"
            />

            <NivelamentoCard title="Técnicas de Preparação de Dados — Visão Geral">
                <p>
                    Em ambientes de <strong>Big Data</strong>, é comum que os dados estejam
                    <strong> incompletos</strong>, <strong>inconsistentes</strong> e
                    <strong> ruidosos</strong>. Por isso, antes da análise (Analytics),
                    visualização ou modelos de IA/ML, realiza-se a etapa de
                    <strong> preparação de dados</strong>.
                </p>

                <p className="mb-0">
                    O objetivo é <strong>melhorar a qualidade</strong> e a
                    <strong> utilidade</strong> da base, reduzindo erros e inconsistências,
                    para que os resultados obtidos sejam confiáveis.
                </p>
            </NivelamentoCard>

            <NivelamentoCard title="Limpeza de Dados (Data Cleaning)">
                <p>
                    A <strong>limpeza de dados</strong> consiste em identificar e tratar
                    problemas que podem comprometer a análise.
                </p>

                <ul className="mb-0">
                    <li>Correção/remoção de <strong>valores inválidos</strong>.</li>
                    <li>Tratamento de <strong>dados ausentes</strong> (missing values).</li>
                    <li>Eliminação de <strong>duplicidades</strong> (deduplicação).</li>
                    <li>Padronização de formatos (datas, textos, unidades).</li>
                    <li>Correção de inconsistências (ex.: valores fora de regra).</li>
                </ul>
            </NivelamentoCard>

            <NivelamentoCard title="Suavização de Dados (Data Smoothing) — Redução de Ruído">
                <p>
                    Em bases grandes, podem aparecer <strong>dados ruidosos</strong>
                    (valores “fora de padrão”, inconsistentes ou distorcidos), que
                    prejudicam medidas estatísticas e modelos analíticos.
                    Uma técnica clássica para reduzir esse efeito é a
                    <strong> suavização</strong>.
                </p>

                <p className="mb-2">
                    Um método muito cobrado em prova é o <strong>binning</strong>
                    (compartimentação):
                </p>

                <ul className="mb-0">
                    <li>Dividir os valores em <strong>intervalos (bins)</strong>.</li>
                    <li>
                        Substituir os valores do intervalo por um valor
                        <strong> representativo</strong> (ex.: <strong>média</strong> ou
                        <strong> mediana</strong> do bin).
                    </li>
                    <li>
                        Resultado: redução do impacto do ruído e dados mais
                        <strong> estáveis</strong> para análise.
                    </li>
                </ul>
            </NivelamentoCard>

            <NivelamentoCard title="Detecção de Outliers (Anomalias)">
                <p>
                    <strong>Outliers</strong> são valores que se distanciam significativamente
                    do comportamento esperado, podendo indicar erro de coleta,
                    inconsistência ou evento raro.
                </p>

                <ul className="mb-0">
                    <li>Podem <strong>distorcer</strong> médias e outras medidas.</li>
                    <li>Podem <strong>prejudicar</strong> modelos analíticos.</li>
                    <li>Devem ser <strong>avaliados</strong> antes de remover/ajustar.</li>
                </ul>

                <p className="mt-2 mb-0">
                    Após identificados, podem ser <strong>tratados</strong> (ajuste),
                    <strong> isolados</strong> (análise separada) ou
                    <strong> descartados</strong>, conforme o objetivo.
                </p>
            </NivelamentoCard>

            <NivelamentoCard title="Transformação de Dados">
                <p>
                    A <strong>transformação</strong> altera os dados para torná-los mais
                    adequados ao processamento e à análise.
                </p>

                <ul className="mb-0">
                    <li>Conversão de tipos (texto → número, data → timestamp etc.).</li>
                    <li>Normalização/padronização (adequar escalas).</li>
                    <li>Criação de <strong>atributos derivados</strong> (feature engineering).</li>
                    <li>Agrupamento/sumarização (reduzir granularidade quando necessário).</li>
                </ul>

                <p className="mt-2 mb-0">
                    Em Big Data, essas etapas podem ocorrer de forma
                    <strong> distribuída</strong> (ex.: Hadoop/Spark).
                </p>
            </NivelamentoCard>

            <NivelamentoCard title="Redução de Dimensionalidade">
                <p>
                    Em ambientes de <strong>Big Data</strong>, é comum lidar com conjuntos de dados que
                    apresentam um <strong>número muito elevado de atributos (colunas)</strong>,
                    o que pode aumentar o <strong>custo computacional</strong> e dificultar a análise.
                </p>

                <p>
                    A <strong>redução de dimensionalidade</strong> consiste em técnicas que buscam
                    <strong>reduzir a quantidade de variáveis</strong>, mantendo, tanto quanto possível,
                    as <strong>informações mais relevantes</strong> do conjunto de dados.
                </p>

                <ul className="mb-0">
                    <li>
                        Atua sobre o <strong>número de atributos (colunas)</strong>, e não sobre
                        a quantidade de registros.
                    </li>
                    <li>
                        Facilita a análise e melhora o desempenho de ferramentas e modelos analíticos.
                    </li>
                    <li>
                        É aplicada na <strong>fase de preparação dos dados</strong>.
                    </li>
                </ul>

                <p className="mt-2 mb-0">
                    Uma técnica clássica é a <strong>Análise de Componentes Principais (PCA)</strong>,
                    que transforma um grande conjunto de variáveis em um número menor de
                    <strong>componentes principais</strong>, preservando grande parte da variabilidade
                    dos dados.
                </p>
            </NivelamentoCard>


            <NivelamentoCard title="Integração de Dados">
                <p>
                    A <strong>integração</strong> combina dados de <strong>múltiplas fontes</strong>
                    (sistemas, sensores, logs, APIs), muitas vezes com formatos diferentes.
                </p>

                <ul className="mb-0">
                    <li>Unificação de bases e padronização de chaves.</li>
                    <li>Resolução de conflitos e redundâncias.</li>
                    <li>Alinhamento semântico (mesmo significado para campos equivalentes).</li>
                </ul>

                <p className="mt-2 mb-0">
                    É comum em Big Data, pois as fontes são diversas e heterogêneas.
                </p>
            </NivelamentoCard>

            <NivelamentoCard title="Resumo para Prova — Preparação de Dados (CESGRANRIO)">
                <div className="alert alert-light border mb-0">
                    <p className="mb-1">
                        <strong>Preparação</strong> → melhorar qualidade/utilidade antes de analisar
                    </p>
                    <p className="mb-1">
                        <strong>Limpeza</strong> → inválidos, missing values, duplicidades, padronização
                    </p>
                    <p className="mb-1">
                        <strong>Suavização (binning)</strong> → reduzir ruído por intervalos e valor representativo
                    </p>
                    <p className="mb-1">
                        <strong>Outliers</strong> → anomalias que podem distorcer resultados
                    </p>
                    <p className="mb-1">
                        <strong>Transformação</strong> → converter/normalizar/criar atributos derivados
                    </p>
                    <p className="mb-0">
                        <strong>Redução/Integração</strong> → PCA (muitas colunas) / unir múltiplas fontes
                    </p>
                </div>
            </NivelamentoCard>

            <LacunaCard
                numero={13}
                enunciado={
                    <>
                        No contexto de Big Data, a <strong>preparação de dados</strong> é uma
                        etapa anterior à análise propriamente dita e tem como principal
                        objetivo <strong> melhorar a</strong>
                    </>
                }
                opcoes={[
                    "qualidade dos dados",
                    "visualização dos dados",
                    "interpretação dos resultados",
                    "apresentação das informações",
                ]}
                correta="qualidade dos dados"
                explicacao={
                    <>
                        A preparação de dados envolve limpeza, transformação, integração e
                        detecção de outliers, tendo como finalidade
                        <strong> melhorar a qualidade da base</strong> antes da análise.
                    </>
                }
            />

            <LacunaCard
                numero={14}
                enunciado={
                    <>
                        Durante a preparação de uma base de dados em um ambiente de
                        <strong> Big Data</strong>, um analista identificou registros
                        duplicados, valores ausentes e inconsistências nos formatos de datas.
                        <br /><br />
                        As ações realizadas para corrigir esses problemas fazem parte da
                        etapa de
                    </>
                }
                opcoes={[
                    "limpeza de dados",
                    "apresentação de dados",
                    "mineração de dados",
                    "visualização de dados",
                ]}
                correta="limpeza de dados"
                explicacao={
                    <>
                        A <strong>limpeza de dados</strong> é uma técnica de preparação que
                        envolve o tratamento de valores inválidos, dados ausentes,
                        duplicidades e inconsistências, garantindo maior confiabilidade à base.
                    </>
                }
            />


            <LacunaCard
                numero={15}
                titulo="Fixação — Preparação de Dados (Lacunas)"
                enunciado={
                    <>
                        Na preparação de dados em <strong>Big Data</strong>, a etapa de{" "}
                        <strong>[1]</strong> trata problemas como <strong>duplicidades</strong>,
                        <strong> valores inválidos</strong> e <strong>missing values</strong>.
                        Já quando existe um número muito elevado de <strong>atributos (colunas)</strong>,
                        uma técnica indicada é a <strong>[2]</strong>, sendo a{" "}
                        <strong>[3]</strong> (Análise de Componentes Principais) um exemplo clássico.
                    </>
                }
                opcoes={[
                    "limpeza de dados (data cleaning)",
                    "transformação de dados",
                    "integração de dados",
                    "redução de dimensionalidade",
                    "PCA",
                    "detecção de outliers",
                ]}
                correta={[
                    "limpeza de dados (data cleaning)",
                    "redução de dimensionalidade",
                    "PCA",
                ]}
                explicacao={
                    <>
                        <ul className="mb-0">
                            <li>
                                <strong>Limpeza</strong> → corrige/remove inconsistências, duplicidades e trata ausentes.
                            </li>
                            <li>
                                <strong>Redução de dimensionalidade</strong> → reduz o número de colunas/variáveis.
                            </li>
                            <li>
                                <strong>PCA</strong> → cria componentes principais preservando variabilidade.
                            </li>
                        </ul>
                    </>
                }
            />


            <QuestaoCard
                numero={16}
                rotulo="Exercício de Fixação"
                fonte="Fixação — Preparação de Dados"
                enunciado={
                    <>
                        <p className="mb-2">
                            Considere as técnicas de preparação de dados apresentadas a seguir.
                        </p>

                        <p><strong>Coluna I</strong></p>
                        <ul>
                            <li>I – Limpeza de Dados</li>
                            <li>II – Detecção de Outliers</li>
                            <li>III – Transformação de Dados</li>
                            <li>IV – Redução de Dimensionalidade</li>
                            <li>V – Integração de Dados</li>
                        </ul>

                        <p><strong>Coluna II</strong></p>
                        <ul className="mb-0">
                            <li>( ) Combina dados de múltiplas fontes, resolvendo conflitos e redundâncias.</li>
                            <li>( ) Identifica anomalias (resultados raros) que podem distorcer análises.</li>
                            <li>( ) Converte/normaliza dados e pode criar atributos derivados.</li>
                            <li>( ) Trata dados ausentes, valores inválidos e duplicidades.</li>
                            <li>( ) Reduz o número de atributos (colunas), por exemplo com PCA.</li>
                        </ul>

                        <p className="mt-2 mb-0">
                            Assinale a alternativa que apresenta a associação correta, de cima para baixo.
                        </p>
                    </>
                }
                alternativas={[
                    "V – II – III – I – IV",
                    "V – III – II – I – IV",
                    "II – V – III – I – IV",
                    "V – II – I – III – IV",
                    "I – II – III – IV – V",
                ]}
                correta="A"
                comentario={
                    <>
                        <ul className="mb-0">
                            <li><strong>Integração</strong> → múltiplas fontes (V).</li>
                            <li><strong>Outliers</strong> → anomalias/resultados raros (II).</li>
                            <li><strong>Transformação</strong> → converter/normalizar/derivar (III).</li>
                            <li><strong>Limpeza</strong> → missing, inválidos, duplicidades (I).</li>
                            <li><strong>Redução de dimensionalidade</strong> → muitas colunas / PCA (IV).</li>
                        </ul>
                    </>
                }
            />

            {/* 8. Técnicas de Apresentação de Dados */}
            <Secao
                id="sec-apresentacao-dados"
                Icon={Diagram3}
                titulo="8. Técnicas de Apresentação de Dados"
            />

            <NivelamentoCard title="Apresentação de Dados — Conceito">
                <p>
                    A <strong>apresentação de dados</strong> corresponde ao conjunto de técnicas
                    utilizadas para <strong>organizar, exibir e comunicar informações </strong>
                    extraídas a partir dos dados analisados.
                </p>

                <p className="mb-0">
                    Em ambientes de <strong>Big Data</strong>, a apresentação tem como objetivo
                    <strong> facilitar a interpretação</strong> dos resultados obtidos,
                    permitindo que padrões, tendências e exceções sejam compreendidos
                    de forma clara e eficiente.
                </p>
            </NivelamentoCard>

            <NivelamentoCard title="Formas de Apresentação de Dados">
                <p>
                    Os dados preparados e analisados podem ser apresentados de diferentes formas,
                    conforme o tipo de informação que se deseja comunicar.
                </p>

                <ul className="mb-0">
                    <li>
                        <strong>Tabelas:</strong> indicadas para apresentar valores exatos
                        e comparações diretas.
                    </li>
                    <li>
                        <strong>Gráficos:</strong> facilitam a visualização de padrões,
                        tendências e distribuições.
                    </li>
                    <li>
                        <strong>Relatórios resumidos:</strong> sintetizam os principais resultados
                        obtidos na análise.
                    </li>
                </ul>

                <p className="mt-2 mb-0">
                    A escolha da forma de apresentação deve considerar o
                    <strong> objetivo da análise</strong> e o
                    <strong> público-alvo</strong> que irá consumir a informação.
                </p>
            </NivelamentoCard>

            <NivelamentoCard title="Apresentação Analítica — Agregação e Resumo (Sumarização)">
                <p>
                    Em provas da <strong>CESGRANRIO</strong>, é comum que a “apresentação” envolva
                    transformar resultados em uma <strong>visão sintética</strong>, por meio de
                    <strong> agregações</strong> e <strong>resumos</strong>.
                    Isso facilita a comunicação, porque em Big Data é inviável interpretar
                    todos os registros individualmente.
                </p>

                <ul className="mb-0">
                    <li>
                        <strong>Agregação:</strong> consolidar dados em níveis superiores
                        (ex.: por mês, por região, por produto, por canal).
                    </li>
                    <li>
                        <strong>Sumarização:</strong> reduzir a complexidade apresentando
                        medidas como <strong>totais</strong>, <strong>médias</strong>,
                        <strong>percentuais</strong>, <strong>máximo/mínimo</strong>,
                        <strong>contagens</strong> e <strong>rankings</strong>.
                    </li>
                    <li>
                        <strong>Distribuições:</strong> apresentar como os valores se
                        espalham (ex.: faixas, histogramas, frequências).
                    </li>
                </ul>

                <div className="alert alert-light border mt-3 mb-0">
                    <strong>Para a prova:</strong> apresentação em Big Data costuma exigir
                    <strong> resumos e agregações</strong> para tornar os resultados interpretáveis.
                </div>
            </NivelamentoCard>

            <NivelamentoCard title="Indicadores, Métricas e Dashboards (Painéis)">
                <p>
                    Outra forma muito cobrada de <strong>apresentação de dados</strong> é a
                    construção de <strong>indicadores</strong> e <strong>painéis (dashboards)</strong>,
                    que comunicam rapidamente o “estado” do negócio ou do sistema.
                    Em Big Data, dashboards são usados para acompanhar padrões, tendências e
                    exceções em grandes volumes de dados.
                </p>

                <ul className="mb-0">
                    <li>
                        <strong>Indicadores (KPIs):</strong> métricas-chave que resumem o desempenho
                        (ex.: taxa de erro, tempo médio, volume processado, conversão, churn).
                    </li>
                    <li>
                        <strong>Monitoramento:</strong> acompanhamento contínuo (quase em tempo real)
                        para detectar <strong>anomalias</strong> e <strong>tendências</strong>.
                    </li>
                    <li>
                        <strong>Dashboards:</strong> combinam tabelas, gráficos e alertas em uma visão
                        única, orientada à <strong>tomada de decisão</strong>.
                    </li>
                </ul>

                <div className="alert alert-light border mt-3 mb-0">
                    <strong>Para a prova:</strong> dashboards e KPIs são formas de
                    <strong> apresentação</strong> — eles <strong>comunicam</strong> resultados,
                    não substituem a etapa de preparação (limpeza/transformação) dos dados.
                </div>
            </NivelamentoCard>

            <NivelamentoCard title="Boas Práticas na Apresentação de Dados">
                <ul className="mb-0">
                    <li>
                        Priorizar a <strong>clareza</strong> e a simplicidade.
                    </li>
                    <li>
                        Evitar excesso de informações que dificultem a interpretação.
                    </li>
                    <li>
                        Destacar <strong>padrões, tendências e exceções</strong>.
                    </li>
                    <li>
                        Utilizar representações adequadas ao tipo de dado analisado.
                    </li>
                    <li>
                        Garantir que a apresentação apoie a
                        <strong> tomada de decisão</strong>.
                    </li>
                </ul>

                <div className="alert alert-light border mt-3 mb-0">
                    <strong>Para a prova:</strong> a apresentação de dados
                    <strong> não processa</strong> nem <strong> transforma</strong> os dados,
                    mas <strong> comunica</strong> os resultados da análise.
                </div>
            </NivelamentoCard>

            <LacunaCard
                numero={17}
                enunciado={
                    <>
                        Em Big Data, a <strong>apresentação de dados</strong> tem como principal objetivo
                        <strong> facilitar a</strong>
                    </>
                }
                opcoes={[
                    "interpretação dos resultados",
                    "coleta dos dados",
                    "transformação dos dados",
                    "limpeza da base de dados",
                ]}
                correta="interpretação dos resultados"
                explicacao={
                    <>
                        A apresentação de dados não realiza processamento nem transformação.
                        Seu objetivo é <strong>comunicar os resultados da análise</strong>,
                        facilitando a interpretação de padrões, tendências e exceções.
                    </>
                }
            />

            <LacunaCard
                numero={18}
                enunciado={
                    <>
                        Diferentemente da <strong>preparação de dados</strong>, a etapa de
                        <strong> apresentação de dados</strong> tem como foco principal
                        <strong> comunicar</strong>, e não
                    </>
                }
                opcoes={[
                    "processar ou transformar os dados",
                    "integrar dados de múltiplas fontes",
                    "detectar outliers",
                    "tratar dados ausentes",
                ]}
                correta="processar ou transformar os dados"
                explicacao={
                    <>
                        A preparação envolve limpeza, transformação e integração.
                        Já a apresentação tem como finalidade
                        <strong> comunicar e facilitar a compreensão</strong>
                        dos resultados obtidos na análise.
                    </>
                }
            />

            {/* 9. MapReduce */}
            <Secao id="sec-mapreduce" Icon={Cpu} titulo="9. Processamento Distribuído com MapReduce" />

            {/* Visão geral */}
            <NivelamentoCard title="Processamento no Hadoop — MapReduce">
                <ul className="mb-0">
                    <li>
                        Modelo computacional e de programação para o
                        <strong> processamento distribuído e paralelo</strong> de aplicações.
                    </li>
                    <li>
                        Projetado para processar <strong>grandes volumes de dados</strong>,
                        dividindo o trabalho em tarefas independentes executadas em um cluster.
                    </li>
                    <li>
                        Baseia-se nas funções <strong>Map</strong> (mapeamento) e
                        <strong> Reduce</strong> (agregação).
                    </li>
                    <li>
                        O processamento ocorre por meio de <strong>jobs</strong>,
                        que executam programas contendo as funções Map e Reduce.
                    </li>
                </ul>

                <div className="alert alert-light border mt-3 mb-0">
                    <strong>Em síntese:</strong> o <strong>MapReduce</strong> é um modelo de
                    <strong> processamento distribuído e paralelo</strong>, voltado ao
                    tratamento de <strong>grandes volumes de dados</strong>, no qual o trabalho
                    é dividido em tarefas independentes executadas simultaneamente em um
                    <strong> cluster de computadores</strong>.
                </div>
            </NivelamentoCard>


            {/* composição */}
            <NivelamentoCard title="Composição de um Job (Trabalho)">
                <ul className="mb-0">
                    <li>
                        <strong>Map:</strong> etapa responsável por dividir e mapear os dados de entrada,
                        gerando pares chave-valor.
                    </li>
                    <li>
                        <strong>Shuffle:</strong> fase intermediária de embaralhamento e redistribuição
                        dos dados entre as tarefas.
                    </li>
                    <li>
                        <strong>Reduce:</strong> etapa responsável por agregar e consolidar os resultados
                        produzidos na fase Map.
                    </li>
                </ul>
            </NivelamentoCard>

            {/* EXEMPLO DIDÁTICO (MAP x SHUFFLE x REDUCE) */}
            <NivelamentoCard title="Exemplo didático — Entendendo MAP e REDUCE (na prática)">
                <p>
                    Pense no MapReduce como um “jeito de contar coisas” em grande escala.
                    Vamos usar um exemplo simples e clássico: <strong>contagem de palavras</strong>.
                </p>

                <p className="mb-0">
                    <strong>Objetivo:</strong> dado um conjunto de linhas de texto, descobrir quantas vezes cada palavra aparece.
                </p>

                <div className="table-responsive mt-3">
                    <table className="table table-bordered mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Entrada (texto)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Linha 1: <strong>cafe cafe cachorro</strong>
                                    <br />
                                    Linha 2: <strong>cachorro cafe</strong>
                                    <br />
                                    Linha 3: <strong>bigdata cafe</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="alert alert-light border mt-3 mb-0">
                    <strong>Ideia principal:</strong> o <strong>MAP</strong> “quebra e marca”,
                    e o <strong>REDUCE</strong> “agrupa e soma”.
                </div>
            </NivelamentoCard>

            <NivelamentoCard title="MAP → SHUFFLE → REDUCE">
                <h6 className="mb-2">1) MAP (mapeamento)</h6>
                <p className="mb-2">
                    Cada tarefa <strong>Map</strong> lê um <strong>pedaço da entrada</strong> e transforma os dados
                    em pares <strong>(chave, valor)</strong>.
                </p>

                <p className="mb-2">
                    No exemplo de <strong>contagem de palavras</strong>, o Map <strong>não calcula totais</strong>.
                    Ele apenas <strong>registra cada ocorrência individual</strong> encontrada no texto.
                </p>

                <p className="mb-0">
                    Assim, a regra utilizada é:
                    <br />
                    <strong>para cada palavra encontrada</strong> → emitir <strong>(palavra, 1)</strong>,
                    <br />
                    onde o valor <strong>1</strong> representa <strong>uma única ocorrência</strong>,
                    e <strong>não</strong> a quantidade total da palavra no conjunto de dados.
                </p>

                <div className="table-responsive mb-4">
                    <table className="table table-bordered">
                        <thead className="table-light">
                            <tr>
                                <th>Trecho lido pelo Map</th>
                                <th>Saída do Map (pares chave-valor)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Linha 1: <strong>cafe cafe cachorro</strong></td>
                                <td>
                                    (cafe,1), (cafe,1), (cachorro,1)
                                </td>
                            </tr>
                            <tr>
                                <td>Linha 2: <strong>cachorro cafe</strong></td>
                                <td>
                                    (cachorro,1), (cafe,1)
                                </td>
                            </tr>
                            <tr>
                                <td>Linha 3: <strong>bigdata cafe</strong></td>
                                <td>
                                    (bigdata,1), (cafe,1)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h6 className="mb-2">2) SHUFFLE (embaralhar e agrupar)</h6>
                <p className="mb-2">
                    O <strong>Shuffle</strong> pega tudo que saiu do Map e <strong>agrupa por chave</strong>.
                    Ou seja: todas as ocorrências de <strong>cafe</strong> vão para o mesmo lugar,
                    todas as de <strong>cachorro</strong> para outro, e assim por diante.
                </p>

                <div className="table-responsive mb-4">
                    <table className="table table-bordered">
                        <thead className="table-light">
                            <tr>
                                <th>Chave</th>
                                <th>Lista de valores (agrupados)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>cafe</strong></td>
                                <td>[1, 1, 1, 1]</td>
                            </tr>
                            <tr>
                                <td><strong>cachorro</strong></td>
                                <td>[1, 1]</td>
                            </tr>
                            <tr>
                                <td><strong>bigdata</strong></td>
                                <td>[1]</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h6 className="mb-2">3) REDUCE (agregar)</h6>
                <p className="mb-2">
                    A tarefa <strong>Reduce</strong> recebe <strong>(chave, lista de valores)</strong> e
                    faz a agregação. Na contagem de palavras, a agregação é:
                    <br />
                    <strong>somar a lista</strong> → produzir o total
                </p>

                <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Entrada do Reduce</th>
                                <th>Saída final</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>(cafe, [1,1,1,1])</td>
                                <td><strong>(cafe, 4)</strong></td>
                            </tr>
                            <tr>
                                <td>(cachorro, [1,1])</td>
                                <td><strong>(cachorro, 2)</strong></td>
                            </tr>
                            <tr>
                                <td>(bigdata, [1])</td>
                                <td><strong>(bigdata, 1)</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="alert alert-success mt-3 mb-0">
                    <strong>Resumo para prova (guarde isso):</strong>
                    <br />
                    <strong>MAP</strong> transforma entrada em <strong>(chave, valor)</strong> (ex.: palavra → 1)
                    <br />
                    <strong>SHUFFLE</strong> agrupa por <strong>chave</strong> (ex.: palavra → [1,1,1…])
                    <br />
                    <strong>REDUCE</strong> agrega a lista (ex.: soma → total)
                </div>
            </NivelamentoCard>


            {/* características */}
            <NivelamentoCard title="MapReduce — Características">
                <p>
                    O <strong>MapReduce</strong> abstrai do programador a complexidade do
                    <strong> processamento distribuído</strong>, permitindo o tratamento de grandes
                    volumes de dados de forma paralela.
                </p>

                <ul className="mb-0">
                    <li>Processamento de dados distribuído.</li>
                    <li>Baseado no modelo de pares <strong>chave-valor</strong>.</li>
                    <li>Modelo de processamento em <strong>batch</strong> (processamento em lote).</li>
                    <li>Utilizado na execução de <strong>jobs</strong> no ecossistema Hadoop.</li>
                    <li>
                        <strong>Flexibilidade:</strong> permite processar dados independentemente
                        do tipo e do formato.
                    </li>
                    <li>
                        <strong>Confiabilidade:</strong> tarefas são executadas em paralelo e,
                        em caso de falhas, podem ser reexecutadas automaticamente.
                    </li>
                    <li>
                        <strong>Acessibilidade:</strong> suporte a múltiplas linguagens, como
                        Java, C++, Python e Apache Pig.
                    </li>
                </ul>
            </NivelamentoCard>

            {/* QUESTOES */}
            <LacunaCard
                numero={19}
                enunciado={
                    <>
                        O modelo <strong>MapReduce</strong> é caracterizado como um modelo de
                        processamento <strong>distribuído e paralelo</strong>, voltado
                        principalmente ao processamento de dados em modo
                    </>
                }
                opcoes={[
                    "batch (lote)",
                    "tempo real",
                    "interativo",
                    "transacional",
                ]}
                correta="batch (lote)"
                explicacao={
                    <>
                        O <strong>MapReduce</strong> é um modelo de processamento em
                        <strong> batch</strong>, no qual grandes volumes de dados são
                        processados em lote.
                    </>
                }
            />

            {/* QUESTÃO — ASSOCIAÇÃO (MAP × SHUFFLE × REDUCE) */}
            <QuestaoCard
                numero={20}
                fonte="Big Data — MapReduce"
                rotulo="Exercício de Fixação"
                enunciado={
                    <>
                        <p className="mb-2">
                            Considere as etapas do modelo <strong>MapReduce</strong> e suas
                            respectivas funções.
                        </p>

                        <p><strong>Coluna I</strong></p>
                        <ul>
                            <li>I – Map</li>
                            <li>II – Shuffle</li>
                            <li>III – Reduce</li>
                        </ul>

                        <p><strong>Coluna II</strong></p>
                        <ul className="mb-0">
                            <li>( ) Agrupa e redistribui os dados intermediários entre as tarefas.</li>
                            <li>( ) Processa os dados de entrada, gerando pares chave-valor.</li>
                            <li>( ) Agrega os valores associados à mesma chave, produzindo o resultado final.</li>
                        </ul>

                        <p className="mt-2 mb-0">
                            Assinale a alternativa que apresenta a associação correta,
                            de cima para baixo.
                        </p>
                    </>
                }
                alternativas={[
                    "II – I – III",
                    "I – II – III",
                    "II – III – I",
                    "III – I – II",
                    "I – III – II",
                ]}
                correta="A"
                comentario={
                    <>
                        <ul className="mb-0">
                            <li><strong>Map</strong> → gera pares chave-valor.</li>
                            <li><strong>Shuffle</strong> → agrupa e redistribui os dados.</li>
                            <li><strong>Reduce</strong> → agrega os valores e produz o resultado final.</li>
                        </ul>
                    </>
                }
            />
            <LacunaCard
                numero={21}
                enunciado={
                    <>
                        No modelo <strong>MapReduce</strong>, a etapa responsável por
                        <strong> transformar os dados de entrada em pares (chave, valor),
                            representando ocorrências individuais</strong> é o
                    </>
                }
                opcoes={["Map", "Reduce"]}
                correta="Map"
                explicacao={
                    <>
                        A função <strong>Map</strong> apenas <strong>mapeia</strong> os dados,
                        emitindo pares <strong>(chave, valor)</strong>, como
                        <em> (palavra, 1)</em>, em que o valor representa
                        <strong> uma ocorrência individual</strong>.
                        <br />
                        Já a função <strong>Reduce</strong> é responsável por
                        <strong> agregar</strong> os valores associados à mesma chave,
                        produzindo o resultado final.
                    </>
                }
            />

            {/* suporte à execução */}
            <NivelamentoCard title="Suporte à Execução (MapReduce)">
                <h6 className="mb-2">JobTracker</h6>
                <p>
                    O <strong>JobTracker</strong> é responsável por receber as aplicações MapReduce,
                    dividir o processamento em tarefas <strong>Map</strong> e <strong>Reduce </strong>
                    e agendar sua execução no cluster. Também monitora o andamento das tarefas e,
                    em caso de falhas, reprograma sua execução em outro nó.
                </p>

                <h6 className="mb-2">TaskTracker</h6>
                <p>
                    O <strong>TaskTracker</strong> executa as tarefas Map e Reduce atribuídas pelo
                    JobTracker e informa continuamente o status da execução. Há uma instância de
                    TaskTracker em cada nó do cluster, responsável pela utilização dos recursos
                    locais.
                </p>

                <h6 className="mb-2">SecondaryNameNode</h6>
                <p className="mb-0">
                    O <strong>SecondaryNameNode</strong> auxilia o NameNode realizando
                    <em> checkpoints</em> periódicos do sistema de arquivos, combinando informações
                    de estado para facilitar a recuperação e reduzir o tempo de reinicialização
                    do HDFS.
                </p>
            </NivelamentoCard>

            {/* 10. Spark */}
            <Secao id="sec-spark" Icon={Cpu} titulo="10. Spark e o Processamento Distribuído Moderno" />

            <NivelamentoCard title="Apache Spark — Visão Geral">
                <p>
                    O <strong>Apache Spark</strong> é um <strong>framework de processamento distribuído</strong>,
                    amplamente utilizado em ambientes de <strong>Big Data</strong>, projetado para o
                    <strong> processamento rápido e eficiente de grandes volumes de dados</strong>.
                </p>

                <p className="mb-0">
                    Diferentemente do modelo tradicional baseado apenas em <strong>MapReduce</strong>,
                    o Spark foi desenvolvido para realizar grande parte do processamento
                    <strong> em memória</strong>, o que reduz o acesso a disco e proporciona
                    <strong> maior desempenho</strong>, especialmente em análises iterativas e interativas.
                </p>
            </NivelamentoCard>

            <NivelamentoCard title="Spark como Evolução do MapReduce">
                <p>
                    O Spark pode ser entendido como uma <strong>evolução do modelo MapReduce</strong>,
                    pois também realiza <strong>processamento distribuído e paralelo</strong>,
                    porém de forma mais eficiente.
                </p>

                <ul className="mb-0">
                    <li>
                        O <strong>MapReduce</strong> baseia-se fortemente em operações de leitura e escrita em disco.
                    </li>
                    <li>
                        O <strong>Spark</strong> prioriza o <strong>processamento em memória</strong>,
                        reduzindo a latência das operações.
                    </li>
                    <li>
                        Ambos são utilizados para o processamento de <strong>grandes volumes de dados </strong>
                        em clusters.
                    </li>
                </ul>
            </NivelamentoCard>

            <NivelamentoCard title="Spark Core">
                <p>
                    O <strong>Spark Core</strong> é o <strong>núcleo do Ecossistema Spark</strong>,
                    sendo responsável pelas funcionalidades consideradas essenciais da plataforma.
                </p>

                <ul className="mb-0">
                    <li>
                        Execução de <strong>computação distribuída</strong>.
                    </li>
                    <li>
                        <strong>Agendamento de tarefas</strong> no cluster.
                    </li>
                    <li>
                        <strong>Gerenciamento de memória</strong>.
                    </li>
                    <li>
                        <strong>Tolerância a falhas</strong>.
                    </li>
                    <li>
                        Comunicação com sistemas de armazenamento distribuído.
                    </li>
                </ul>

                <p className="mt-2 mb-0">
                    Todos os demais componentes do Spark são construídos
                    <strong> sobre o Spark Core</strong>, que atua como o
                    <strong> “coração” da plataforma</strong>.
                </p>
            </NivelamentoCard>

            <NivelamentoCard title="Ecossistema Spark — Componentes">
                <p>
                    Além do <strong>Spark Core</strong>, o Ecossistema Spark possui componentes
                    especializados que oferecem funcionalidades adicionais para diferentes
                    cenários de Big Data.
                </p>

                <ul className="mb-0">
                    <li>
                        <strong>Spark SQL:</strong> permite consultas e análises de dados estruturados
                        por meio de uma linguagem semelhante ao SQL.
                    </li>
                    <li>
                        <strong>Spark Streaming:</strong> voltado ao processamento de
                        <strong> fluxos de dados em tempo quase real</strong>.
                    </li>
                    <li>
                        <strong>MLlib:</strong> biblioteca para <strong>aprendizado de máquina</strong>
                        distribuído.
                    </li>
                    <li>
                        <strong>GraphX:</strong> processamento e análise de grafos.
                    </li>
                </ul>

                <p className="mt-2 mb-0">
                    Esses componentes ampliam as capacidades do Spark,
                    mantendo como base o funcionamento do <strong>Spark Core</strong>.
                </p>
            </NivelamentoCard>

            <NivelamentoCard title="Resumo para Prova — Spark">
                <div className="alert alert-light border mb-0">
                    <p className="mb-1">
                        <strong>Spark</strong> → framework de processamento distribuído e paralelo
                    </p>
                    <p className="mb-1">
                        <strong>Spark Core</strong> → computação distribuída, agendamento e memória
                    </p>
                    <p className="mb-1">
                        <strong>Processamento em memória</strong> → maior desempenho
                    </p>
                    <p className="mb-0">
                        <strong>Big Data</strong> → grandes volumes de dados em cluster
                    </p>
                </div>
            </NivelamentoCard>

            <LacunaCard
                numero={22}
                enunciado={
                    <>
                        O <strong>Apache Spark</strong> é um framework de processamento
                        distribuído amplamente utilizado em Big Data e se destaca,
                        principalmente, por priorizar o processamento
                    </>
                }
                opcoes={[
                    "em memória",
                    "transacional",
                    "exclusivamente em disco",
                    "centralizado",
                ]}
                correta="em memória"
                explicacao={
                    <>
                        O Spark prioriza o <strong>processamento em memória</strong>,
                        reduzindo operações de leitura e escrita em disco e proporcionando
                        maior desempenho em comparação ao modelo tradicional de MapReduce.
                    </>
                }
            />

            <QuestaoCard
                numero={23}
                rotulo="Exercício de Fixação"
                fonte="Big Data — Ecossistema Spark"
                enunciado={
                    <>
                        <p className="mb-2">
                            Considere os componentes do <strong>Ecossistema Spark</strong>
                            e suas respectivas funcionalidades.
                        </p>

                        <p><strong>Coluna I</strong></p>
                        <ul>
                            <li>I – Spark Core</li>
                            <li>II – Spark SQL</li>
                            <li>III – Spark Streaming</li>
                        </ul>

                        <p><strong>Coluna II</strong></p>
                        <ul className="mb-0">
                            <li>( ) Processamento de fluxos de dados em tempo quase real.</li>
                            <li>( ) Funcionalidades essenciais de computação distribuída,
                                como agendamento de tarefas e gerenciamento de memória.</li>
                            <li>( ) Consulta e análise de dados estruturados utilizando
                                linguagem semelhante ao SQL.</li>
                        </ul>

                        <p className="mt-2 mb-0">
                            Assinale a alternativa que apresenta a associação correta,
                            de cima para baixo.
                        </p>
                    </>
                }
                alternativas={[
                    "III – I – II",
                    "I – II – III",
                    "II – III – I",
                    "III – II – I",
                    "I – III – II",
                ]}
                correta="A"
                comentario={
                    <>
                        <ul className="mb-0">
                            <li><strong>Spark Streaming</strong> → fluxos de dados em tempo quase real.</li>
                            <li><strong>Spark Core</strong> → computação distribuída, memória e agendamento.</li>
                            <li><strong>Spark SQL</strong> → análise de dados estruturados com SQL.</li>
                        </ul>
                    </>
                }
            />

            {/* 11. Ferramentas */}
            <Secao id="sec-ferramentas" Icon={Tools} titulo="11. Ferramentas de Alto Nível do Ecossistema Hadoop" />

            <NivelamentoCard title="Apache Pig">
                <ul className="mb-0">
                    <li>
                        Linguagem de <strong>alto nível</strong> voltada ao processamento de grandes
                        volumes de dados.
                    </li>
                    <li>
                        Utilizada para o desenvolvimento de programas
                        <strong> MapReduce</strong> de forma mais simples e abstrata.
                    </li>
                    <li>
                        Possui uma linguagem própria chamada <strong>Pig Latin</strong>.
                    </li>
                    <li>
                        Os programas escritos em Pig são traduzidos automaticamente
                        para <strong>MapReduce</strong>.
                    </li>
                </ul>
            </NivelamentoCard>

            <NivelamentoCard title="Hive e HiveQL">
                <ul className="mb-0">
                    <li>
                        O <strong>Hive</strong> é uma ferramenta do ecossistema Hadoop que
                        permite realizar consultas sobre grandes volumes de dados armazenados no HDFS.
                    </li>
                    <li>
                        O <strong>HiveQL</strong> é uma linguagem similar ao SQL, utilizada para
                        definir consultas que são traduzidas para <strong>MapReduce</strong>.
                    </li>
                    <li>
                        Trabalha com dados organizados em <strong>estruturas tabulares</strong>.
                    </li>
                    <li>
                        <strong>Não é OLTP</strong>, sendo voltado ao processamento analítico
                        (<em>batch</em>).
                    </li>
                    <li>
                        Não oferece suporte completo a operações transacionais em nível de linha,
                        como <strong>UPDATE</strong> e <strong>DELETE</strong>.
                    </li>
                </ul>
            </NivelamentoCard>

            <QuestaoCard
                numero={24}
                rotulo="Exercício de Fixação"
                fonte="Big Data — Ferramentas Hadoop"
                enunciado={
                    <>
                        <p className="mb-2">
                            Considere as ferramentas do ecossistema Hadoop e suas respectivas características.
                        </p>

                        <p><strong>Coluna I</strong></p>
                        <ul>
                            <li>I – Apache Pig</li>
                            <li>II – Apache Hive</li>
                        </ul>

                        <p><strong>Coluna II</strong></p>
                        <ul className="mb-0">
                            <li>( ) Utiliza uma linguagem de alto nível própria (Pig Latin) e seus programas são traduzidos para MapReduce.</li>
                            <li>( ) Permite consultas em linguagem semelhante ao SQL (HiveQL) sobre dados no HDFS, com foco analítico (batch).</li>
                        </ul>

                        <p className="mt-2 mb-0">
                            Assinale a alternativa que apresenta a associação correta, de cima para baixo.
                        </p>
                    </>
                }
                alternativas={[
                    "I – II",
                    "II – I",
                    "I – I",
                    "II – II",
                    "Nenhuma das anteriores",
                ]}
                correta="A"
                comentario={
                    <>
                        <ul className="mb-0">
                            <li><strong>Apache Pig</strong> → Pig Latin e tradução para MapReduce.</li>
                            <li><strong>Hive</strong> → consultas tipo SQL (HiveQL) e foco analítico em batch.</li>
                        </ul>
                    </>
                }
            />

            <LacunaCard
                numero={25}
                enunciado={
                    <>
                        No ecossistema Hadoop, a linguagem <strong>[1]</strong> é utilizada no
                        <strong> Hive</strong> para escrever consultas semelhantes ao SQL, que
                        podem ser traduzidas para <strong>MapReduce</strong>, sendo uma
                        ferramenta voltada ao processamento <strong>batch</strong>.
                    </>
                }
                opcoes={[
                    "HiveQL",
                    "Pig Latin",
                    "SQL Server",
                    "PL/pgSQL",
                ]}
                correta="HiveQL"
                explicacao={
                    <>
                        O <strong>HiveQL</strong> é a linguagem do <strong>Hive</strong>,
                        semelhante ao SQL, usada para consultas analíticas sobre dados no HDFS.
                        Já o <strong>Pig Latin</strong> pertence ao Apache Pig.
                    </>
                }
            />

            {/* Questões */}
            <NivelamentoCard title="Agora é com você">
                <p className="mb-0">
                    Resolva as questões a seguir para fixar os principais conceitos
                    de Big Data cobrados pela banca CESGRANRIO.
                </p>
            </NivelamentoCard>

            {questoesBigDataConcurso
                .filter(q => q.exibirNoNivelamento)
                .map((q) => (
                    <QuestaoCard
                        key={q.id}
                        numero={q.numero}
                        fonte={`${q.banca} (${q.prova} / ${q.ano})`}
                        enunciado={q.enunciado}
                        alternativas={q.alternativas}
                        correta={q.correta}
                        comentario={q.comentario}
                    />
                ))}



        </NivelamentoLayout>
    );
}
