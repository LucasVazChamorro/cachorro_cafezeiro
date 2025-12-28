import React, { useMemo } from "react";
import NivelamentoLayout from "../components/nivelamento/NivelamentoLayout.jsx";
import NivelamentoCard from "../components/nivelamento/NivelamentoCard.jsx";
import QuestaoCard from "../components/nivelamento/QuestaoCard.jsx";
// import { questoesMedidasTendenciaCentral } from "./questoes/questoesMedidasTendenciaCentral.jsx";
import FrequenciaTable from "../components/nivelamento/FrequenciaTable.jsx";
import { questoesMedidasTendenciaCentralConcurso } from "../data/banco-questoes/medidastendenciacentral.concurso.jsx";


import coverImg from "../components/nivelamento/estatistica_probabilidade/medidas-tendencia-central.png";


export default function MedidasTendenciaCentral() {
    return (
        <NivelamentoLayout
            title="MEDIDAS DE TENDÊNCIA CENTRAL"
            subtitle="Média, Mediana e Moda — teoria no estilo CESGRANRIO + questões comentadas."
            coverSrc={coverImg}
            breadcrumbs={[
                { label: "Início", href: "/index.html" },
                { label: "Dashboard", href: "/dashboard.html" },
                { label: "Estatística e Probabilidade", href: "/nivelamento/estatistica_probabilidade/" },
                { label: "Medidas de Tendência Central" },
            ]}
        >
            <NivelamentoCard
                title={
                    <>
                        <i className="bi bi-info-circle me-2 text-success"></i>
                        Introdução
                    </>
                }
            >
                <p>
                    No estudo de uma série estatística, é comum calcular algumas medidas numéricas
                    que ajudam a resumir e caracterizar os dados. Quando corretamente interpretadas,
                    essas medidas fornecem informações valiosas sobre o comportamento da série
                    estatística.
                </p>

                <p>
                    Em vez de analisar todos os valores individualmente, podemos representar a série
                    por alguns números-chave, cuja interpretação permite compreender, de forma
                    bastante precisa, como os dados estão distribuídos.
                </p>

                <p className="mb-0">
                    Entre essas medidas, destacam-se as <strong>medidas de tendência central</strong>.
                </p>
            </NivelamentoCard>

            {/* CONCEITO */}
            <NivelamentoCard
                title={
                    <>
                        <i className="bi bi-bullseye me-2 text-success"></i>
                        Conceito
                    </>
                }
            >
                <p>
                    A <strong>medida de tendência central</strong> é um valor intermediário da série,
                    isto é, um valor que se encontra entre o menor e o maior valor observado. Ela
                    indica um ponto em torno do qual os dados tendem a se concentrar.
                </p>

                <p>De forma intuitiva, essa medida:</p>

                <ul>
                    <li>Representa o <strong>centro da distribuição dos dados</strong>;</li>
                    <li>Indica um <strong>valor típico ou representativo</strong> da série;</li>
                    <li>
                        Permite posicionar a série estatística em relação ao{" "}
                        <strong>eixo horizontal</strong> (eixo dos valores).
                    </li>
                </ul>

                <p>
                    Em resumo, a medida de tendência central busca identificar um número no eixo
                    horizontal em torno do qual os valores da série se concentram.
                </p>

                <hr />

                <h6 className="fw-bold mb-2">
                    <i className="bi bi-bar-chart-line me-2"></i>
                    Principais Medidas de Tendência Central
                </h6>

                <p>As principais medidas de tendência central são:</p>

                <ul>
                    <li><strong>Média</strong></li>
                    <li><strong>Mediana</strong></li>
                    <li><strong>Moda</strong></li>
                </ul>

                <p className="mb-0">
                    Cada uma dessas medidas apresenta características próprias e é adequada a
                    diferentes tipos de dados e situações, o que será detalhado nos próximos tópicos.
                </p>
            </NivelamentoCard>


            {/* CARD: MÉDIA */}
            <NivelamentoCard
                title={
                    <>
                        <i className="bi bi-calculator me-2 text-success"></i>
                        Média (ou Média Aritmética)
                    </>
                }
            >
                <p>
                    A <strong>média</strong> é a medida de tendência central obtida pela{" "}
                    <strong>soma de todos os valores da série</strong>, dividida pela{" "}
                    <strong>quantidade de observações</strong>.
                </p>

                <p>
                    Ela representa um <strong>valor de equilíbrio</strong> da distribuição e é
                    bastante utilizada em análises gerais.
                </p>

                <div className="alert alert-light border">
                    <strong>📌 Características importantes:</strong>
                    <ul className="mb-0 mt-2">
                        <li>Considera <strong>todos os valores</strong> da série;</li>
                        <li>
                            É <strong>sensível a valores extremos</strong> (muito altos ou muito baixos);
                        </li>
                        <li>
                            Pode não representar bem o conjunto quando há grande{" "}
                            <strong>dispersão</strong> ou <strong>outliers</strong>.
                        </li>
                    </ul>

                    <hr />

                    <p className="mb-1">
                        <strong>O que é dispersão?</strong><br />
                        É o grau de <strong>espalhamento dos valores</strong> da série.
                        Quanto mais diferentes forem os valores entre si, maior é a dispersão.
                    </p>

                    <div className="mb-3">
                        <strong>Exemplo:</strong>
                        <ul className="mb-1">
                            <li>
                                Série A: <strong>6, 7, 6, 7, 6</strong> → valores próximos →{" "}
                                <strong>baixa dispersão</strong>
                            </li>
                            <li>
                                Série B: <strong>1, 5, 10, 20, 50</strong> → valores muito diferentes →{" "}
                                <strong>alta dispersão</strong>
                            </li>
                        </ul>
                        <span className="text-muted small">
                            Mesmo que seja possível calcular a média nas duas séries, na Série B ela
                            representa pior os dados, pois os valores estão muito espalhados.
                        </span>
                    </div>

                    <p className="mb-1">
                        <strong>O que são outliers?</strong><br />
                        São valores <strong>muito fora do padrão</strong>, que se afastam bastante
                        dos demais e podem <strong>alterar a média</strong>.
                    </p>

                    <div>
                        <strong>Exemplo:</strong>
                        <ul className="mb-1">
                            <li>
                                Valores: <strong>2.000, 2.100, 2.050, 2.000, 15.000</strong>
                            </li>
                        </ul>
                        <span className="text-muted small">
                            O valor <strong>15.000</strong> é um outlier, pois é muito maior que os
                            demais e “puxa” a média para cima, mesmo não representando a maioria dos
                            dados.
                        </span>
                    </div>
                </div>



                <div className="alert alert-secondary">
                    <strong>📌 Interpretação típica em prova:</strong>
                    <p className="mb-0">
                        A média indica o valor que <strong>cada elemento teria</strong> se o total
                        fosse <strong>distribuído igualmente</strong>.
                    </p>
                </div>

                <hr />

                <h6 className="fw-bold mb-3">
                    <i className="bi bi-pencil-square me-2"></i>
                    Exemplo resolvido (passo a passo)
                </h6>
                <p>
                    Suponha que um candidato resolveu o seguinte número de questões ao longo de
                    5 dias:
                </p>

                <div className="table-responsive">
                    <table className="table table-bordered text-center align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>Dia</th>
                                <th>1º dia</th>
                                <th>2º dia</th>
                                <th>3º dia</th>
                                <th>4º dia</th>
                                <th>5º dia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="table-light">Questões resolvidas</th>
                                <td>6</td>
                                <td>8</td>
                                <td>4</td>
                                <td>7</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <p>
                    <strong>1º passo:</strong> somar todos os valores:
                </p>

                <p className="text-center">
                    6 + 8 + 4 + 7 + 5 = <strong>30</strong> questões resolvidas
                </p>

                <p>
                    <strong>2º passo:</strong> dividir pela quantidade de observações (no nosso caso, quantidade de dias):
                </p>

                <p className="text-center">
                    Média = 30 ÷ 5 = <strong>6</strong>
                </p>

                <div className="alert alert-success">
                    <strong>📘 Conclusão:</strong>
                    <p className="mb-0">
                        A média de questões resolvidas por dia é <strong>6</strong>.
                        Isso significa que, se o total fosse distribuído igualmente entre os dias,
                        o candidato teria resolvido 6 questões em cada dia.
                    </p>
                </div>

                <div className="text-muted small">
                    <strong>Legenda:</strong>
                    <ul className="mb-0">
                        <li><strong>Série:</strong> conjunto de valores observados;</li>
                        <li><strong>Observações:</strong> quantidade de dados da série;</li>
                    </ul>
                </div>
            </NivelamentoCard>

            {/* CARD: QUESTÃO MÉDIA */}
            <QuestaoCard
                numero={1}
                fonte="CESGRANRIO — TRANSPETRO — SUPRIDOR (2006)"
                enunciado={
                    <p className="mb-0">
                        A média aritmética da lista <strong>(1; 1; 3; 5; 9)</strong> vale:
                    </p>
                }
                alternativas={[
                    "2,0",
                    "3,0",
                    "3,8",
                    "4,5",
                    "5,0",
                ]}
                correta="C"
                comentario={
                    <>
                        <p>
                            Para calcular a média aritmética, somamos todos os valores da lista e
                            dividimos pela quantidade de elementos.
                        </p>

                        <p className="text-center">
                            1 + 1 + 3 + 5 + 9 = <strong>19</strong>
                        </p>

                        <p className="text-center">
                            Média = 19 ÷ 5 = <strong>3,8</strong>
                        </p>

                        <p className="mb-0">
                            Portanto, a alternativa correta é a <strong>C</strong>.
                        </p>
                    </>
                }
            />

            {/* CARD: MÉDIA PONDERADA*/}
            <NivelamentoCard
                title={
                    <>
                        <i className="bi bi-sliders me-2 text-success"></i>
                        Média Aritmética Ponderada
                    </>
                }
            >
                <p>
                    A <strong>média aritmética ponderada</strong> é uma variação da média em que
                    <strong> nem todos os valores têm a mesma importância</strong>.
                </p>

                <p>
                    Nesse tipo de média, cada valor é associado a um <strong>peso</strong>, que
                    indica o quanto aquele valor deve influenciar no resultado final.
                </p>

                <div className="alert alert-light border">
                    <strong>📌 Quando usar a média ponderada?</strong>
                    <ul className="mb-0 mt-2">
                        <li>Quando alguns valores são <strong>mais importantes</strong> que outros;</li>
                        <li>Quando há <strong>pesos, porcentagens ou quantidades diferentes</strong>;</li>
                        <li>Em situações como <strong>notas com pesos</strong>, custos, médias escolares e avaliações.</li>
                    </ul>
                </div>

                <div className="alert alert-secondary">
                    <strong>📌 Ideia central:</strong><br />
                    Valores com <strong>peso maior</strong> influenciam mais o resultado da média.
                </div>

                <hr />

                <h6 className="fw-bold mb-3">
                    <i className="bi bi-formula me-2"></i>
                    Como calcular (em palavras)
                </h6>

                <p>
                    Para calcular a média ponderada:
                </p>

                <ol>
                    <li>Multiplique cada valor pelo seu respectivo <strong>peso</strong>;</li>
                    <li>Some todos esses resultados;</li>
                    <li>Divida pela <strong>soma dos pesos</strong>.</li>
                </ol>

                <hr />

                <h6 className="fw-bold mb-3">
                    <i className="bi bi-pencil-square me-2"></i>
                    Exemplo resolvido (passo a passo)
                </h6>

                <p>
                    Suponha que um aluno tenha obtido as seguintes notas:
                </p>

                <div className="table-responsive mb-3">
                    <table className="table table-bordered text-center align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>Avaliação</th>
                                <th>Nota</th>
                                <th>Peso</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Prova</td>
                                <td>8</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Trabalho</td>
                                <td>6</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    <strong>1º passo:</strong> multiplicar cada nota pelo seu peso:
                </p>

                <p className="text-center">
                    (8 × 3) + (6 × 1) = 24 + 6 = <strong>30</strong>
                </p>

                <p>
                    <strong>2º passo:</strong> somar os pesos:
                </p>

                <p className="text-center">
                    3 + 1 = <strong>4</strong>
                </p>

                <p>
                    <strong>3º passo:</strong> dividir:
                </p>

                <p className="text-center">
                    Média ponderada = 30 ÷ 4 = <strong>7,5</strong>
                </p>

                <div className="alert alert-success">
                    <strong>📘 Conclusão:</strong>
                    <p className="mb-0">
                        A média do aluno é <strong>7,5</strong>.
                        A prova teve maior peso e, por isso, influenciou mais o resultado final.
                    </p>
                </div>

                <div className="text-muted small">
                    <strong>Legenda:</strong>
                    <ul className="mb-0">
                        <li><strong>Peso:</strong> grau de importância atribuído a um valor;</li>
                        <li><strong>Soma dos pesos:</strong> total usado na divisão final.</li>
                    </ul>
                </div>
            </NivelamentoCard>

            {/* CARD: QUESTÃO MÉDIA PONDERADA*/}
            <QuestaoCard
                numero={2}
                fonte="VUNESP — Prefeitura de Jundiaí — Agente de Trânsito (2021)"
                enunciado={
                    <>
                        <p>
                            No quadro a seguir constam os salários dos 20 funcionários de um dos
                            departamentos de uma empresa.
                        </p>

                        <div className="table-responsive mb-3">
                            <table className="table table-bordered text-center align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>Nº de funcionários</th>
                                        <th>Salário (R$)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>6</td>
                                        <td>1.500,00</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>2.500,00</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>4.000,00</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>10.000,00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="mb-0">
                            A média salarial do referido departamento é igual a:
                        </p>
                    </>
                }
                alternativas={[
                    "R$ 2.500,00",
                    "R$ 2.750,00",
                    "R$ 3.250,00",
                    "R$ 3.750,00",
                    "R$ 4.500,00",
                ]}
                correta="C"
                comentario={
                    <>
                        <p>
                            Como os salários possuem <strong>quantidades diferentes de funcionários</strong>,
                            devemos utilizar a <strong>média aritmética ponderada</strong>.
                        </p>

                        <p>
                            <strong>1º passo:</strong> multiplicar cada salário pelo número de funcionários
                            <strong>{" "}(peso)</strong>:
                        </p>

                        <ul>
                            <li>6 × 1.500 = 9.000</li>
                            <li>8 × 2.500 = 20.000</li>
                            <li>4 × 4.000 = 16.000</li>
                            <li>2 × 10.000 = 20.000</li>
                        </ul>

                        <p>
                            <strong>2º passo:</strong> somar os resultados:
                        </p>

                        <p className="text-center">
                            9.000 + 20.000 + 16.000 + 20.000 = <strong>65.000</strong>
                        </p>

                        <p>
                            <strong>3º passo:</strong> somar o total de funcionários:
                        </p>

                        <p className="text-center">
                            6 + 8 + 4 + 2 = <strong>20</strong>
                        </p>

                        <p>
                            <strong>4º passo:</strong> dividir:
                        </p>

                        <p className="text-center">
                            Média salarial = 65.000 ÷ 20 = <strong>3.250</strong>
                        </p>

                        <div className="alert alert-success mt-3">
                            <strong>✔ Gabarito:</strong> alternativa <strong>C</strong> — R$ 3.250,00
                        </div>

                        <div className="alert alert-light border">
                            <strong>Dica de prova:</strong><br />
                            Sempre que aparecer uma tabela com <strong>quantidades diferentes</strong>
                            {" "}associadas a valores, a banca está indicando o uso da{" "}
                            <strong>média ponderada</strong>.
                        </div>
                    </>
                }
            />

            {/* CARD: MEDIANA*/}
            <NivelamentoCard
                title={
                    <>
                        <i className="bi bi-sort-numeric-down me-2 text-success"></i>
                        Mediana
                    </>
                }
            >
                <p>
                    A <strong>mediana</strong> é a medida de tendência central que corresponde ao
                    <strong> valor central</strong> de uma série de dados, após esses valores
                    serem <strong>ordenados</strong>.
                </p>

                <p>
                    Diferentemente da média, a mediana <strong>não depende da soma</strong> dos
                    valores, mas sim da <strong>posição</strong> que eles ocupam na lista.
                </p>

                <div className="alert alert-secondary">
                    <strong>📌 Ideia central:</strong><br />
                    A mediana divide a série em <strong>duas partes com a mesma quantidade de
                        valores</strong>.
                </div>

                <div className="alert alert-light border">
                    <strong>📌 Passo obrigatório:</strong><br />
                    <strong>Sempre ordene os dados</strong> em ordem crescente ou decrescente
                    antes de procurar a mediana.
                </div>

                <hr />

                {/* CASO 1 */}
                <h6 className="fw-bold mb-3">
                    <i className="bi bi-1-circle me-2"></i>
                    Caso 1 — Número ímpar de termos
                </h6>

                <p>
                    Quando a série possui <strong>quantidade ímpar</strong> de valores, a mediana
                    é simplesmente o <strong>valor que fica no meio</strong> da lista ordenada.
                </p>

                <p>
                    <strong>Exemplo:</strong>
                </p>

                <p className="text-center fw-bold">
                    3 &nbsp;•&nbsp; 5 &nbsp;•&nbsp; <span className="text-success">7</span>
                    &nbsp;•&nbsp; 9 &nbsp;•&nbsp; 11
                </p>

                <div className="alert alert-success">
                    <strong>✔ Mediana:</strong> 7
                    <br />
                    Existem dois valores antes e dois valores depois.
                </div>

                <hr />

                {/* CASO 2 */}
                <h6 className="fw-bold mb-3">
                    <i className="bi bi-2-circle me-2"></i>
                    Caso 2 — Número par de termos
                </h6>

                <p>
                    Quando a série possui <strong>quantidade par</strong> de valores,{" "}
                    <strong>não existe um único valor central</strong>.
                </p>

                <p>
                    Nesse caso, a mediana é calculada como a{" "}
                    <strong>média aritmética dos dois valores centrais</strong>.
                </p>

                <p>
                    <strong>Exemplo:</strong>
                </p>

                <p className="text-center fw-bold">
                    4 &nbsp;•&nbsp; <span className="text-success">6</span> &nbsp;•&nbsp;
                    <span className="text-success">8</span> &nbsp;•&nbsp; 10
                </p>

                <p className="text-center">
                    Valores centrais: 6 e 8
                </p>

                <p className="text-center">
                    Mediana = (6 + 8) ÷ 2 = <strong>7</strong>
                </p>

                <div className="alert alert-success">
                    <strong>✔ Mediana:</strong> 7
                </div>

                <hr />

                <div className="alert alert-light border">
                    <strong>📌 Por que a mediana é importante?</strong>
                    <ul className="mb-0 mt-2">
                        <li>
                            Não é afetada por <strong>valores muito altos ou muito baixos</strong>;
                        </li>
                    </ul>
                </div>

            </NivelamentoCard>

            {/* CARD: QUESTAO MEDIANA IMPAR*/}
            <QuestaoCard
                numero={3}
                fonte="DECORP — Prefeitura de Porto Walter — Merendeira (2025)"
                enunciado={
                    <>
                        <p>
                            Os tempos de atendimento (em minutos) de 7 clientes em um banco foram:
                        </p>

                        <p className="fw-bold text-center">
                            12 &nbsp;•&nbsp; 18 &nbsp;•&nbsp; 10 &nbsp;•&nbsp; 15 &nbsp;•&nbsp; 14 &nbsp;•&nbsp; 11 &nbsp;•&nbsp; 13
                        </p>

                        <p className="mb-0">
                            Qual é a <strong>mediana</strong> desse conjunto de dados?
                        </p>
                    </>
                }
                alternativas={[
                    "11",
                    "12",
                    "13",
                    "15",
                ]}
                correta="C"
                comentario={
                    <>
                        <p>
                            Para encontrar a mediana, o primeiro passo é{" "}
                            <strong>ordenar os valores</strong>.
                        </p>

                        <p className="text-center">
                            10, 11, 12, <strong>13</strong>, 14, 15, 18
                        </p>

                        <p>
                            Como existem <strong>7 valores</strong> (quantidade ímpar), a mediana é
                            o <strong>valor que fica exatamente no meio</strong>.
                        </p>

                        <div className="alert alert-success mt-3">
                            <strong>✔ Gabarito:</strong> alternativa <strong>C</strong> — 13
                        </div>

                        <div className="alert alert-light border">
                            <strong>Dica de prova:</strong><br />
                            Em conjuntos com quantidade ímpar de dados, a mediana é sempre o número
                            central da lista ordenada.
                        </div>
                    </>
                }
            />

            {/* CARD: QUESTAO MEDIANA PAR*/}
            <QuestaoCard
                numero={4}
                fonte="LJ Assessoria — Prefeitura de Dom Eliseu — Assistente Administrativo (2023)"
                enunciado={
                    <>
                        <p>
                            Observe o conjunto de dados brutos a seguir e, em seguida, determine a
                            sua respectiva <strong>mediana</strong>:
                        </p>

                        <p className="fw-bold text-center">
                            (10 – 02 – 05 – 20 – 18 – 32 – 08 – 04 – 12 – 13)
                        </p>
                    </>
                }
                alternativas={[
                    "25",
                    "32",
                    "16",
                    "18",
                    "11",
                ]}
                correta="E"
                comentario={
                    <>
                        <p>
                            Primeiro, organizamos os valores em <strong>ordem crescente</strong>.
                        </p>

                        <p className="text-center">
                            2, 4, 5, 8, <strong>10</strong>, <strong>12</strong>, 13, 18, 20, 32
                        </p>

                        <p>
                            Como existem <strong>10 valores</strong> (quantidade par), não há um único
                            valor central.
                        </p>

                        <p>
                            Nesse caso, a mediana é a <strong>média dos dois valores centrais</strong>.
                        </p>

                        <p className="text-center">
                            Mediana = (10 + 12) ÷ 2 = <strong>11</strong>
                        </p>

                        <div className="alert alert-success mt-3">
                            <strong>✔ Gabarito:</strong> alternativa <strong>E</strong> — 11
                        </div>

                        <div className="alert alert-light border">
                            <strong>Dica de prova:</strong><br />
                            Quando a quantidade de dados é par, sempre localize os dois valores do
                            meio e faça a média entre eles.
                        </div>
                    </>
                }
            />


            {/* CARD: MODA */}
            <NivelamentoCard
                title={
                    <>
                        <i className="bi bi-bar-chart-line me-2 text-success"></i>
                        Moda
                    </>
                }
            >
                <p>
                    A <strong>moda</strong> é a medida de tendência central que indica o
                    <strong> valor que mais se repete</strong> em um conjunto de dados.
                </p>

                <p>
                    Diferentemente da média e da mediana, a moda <strong>não depende de cálculos</strong>,
                    mas apenas da <strong>contagem</strong> de quantas vezes cada valor aparece.
                </p>

                <div className="alert alert-secondary">
                    <strong>📌 Ideia central:</strong><br />
                    Moda é simplesmente o valor <strong>mais frequente</strong>.
                </div>

                <hr />

                <h6 className="fw-bold mb-3">
                    <i className="bi bi-1-circle me-2"></i>
                    Quando existe uma moda
                </h6>

                <p>
                    Quando um valor aparece mais vezes do que os outros, ele é a moda da série.
                </p>

                <p className="fw-bold text-center">
                    2 &nbsp;•&nbsp; 4 &nbsp;•&nbsp; 4 &nbsp;•&nbsp; 5 &nbsp;•&nbsp; 7
                </p>

                <div className="alert alert-success">
                    <strong>✔ Moda:</strong> 4
                    <br />
                    O número 4 aparece mais vezes do que os demais.
                </div>

                <hr />

                <h6 className="fw-bold mb-3">
                    <i className="bi bi-2-circle me-2"></i>
                    Quando existem duas modas
                </h6>

                <p>
                    Em alguns conjuntos, <strong>dois valores aparecem com a mesma maior frequência</strong>.
                </p>

                <p className="fw-bold text-center">
                    1 &nbsp;•&nbsp; 2 &nbsp;•&nbsp; 2 &nbsp;•&nbsp; 3 &nbsp;•&nbsp; 3
                </p>

                <div className="alert alert-success">
                    <strong>✔ Modas:</strong> 2 e 3
                    <br />
                    Ambos aparecem duas vezes.
                </div>

                <hr />

                <h6 className="fw-bold mb-3">
                    <i className="bi bi-3-circle me-2"></i>
                    Quando não existe moda
                </h6>

                <p>
                    Se todos os valores aparecem apenas uma vez, <strong>não existe moda</strong>.
                </p>

                <p className="fw-bold text-center">
                    3 &nbsp;•&nbsp; 5 &nbsp;•&nbsp; 7 &nbsp;•&nbsp; 9
                </p>

                <div className="alert alert-light border">
                    <strong>Conclusão:</strong><br />
                    Nenhum valor se repete, portanto esse conjunto <strong>não possui moda</strong>.
                </div>

                <hr />

                <div className="alert alert-light border">
                    <strong>📌 Quando a moda é mais útil?</strong>
                    <ul className="mb-0 mt-2">
                        <li>
                            Quando queremos saber o <strong>valor mais comum</strong>;
                        </li>
                        <li>
                            Em dados do cotidiano, como <strong>tamanhos, preferências, respostas</strong>;
                        </li>
                        <li>
                            Quando os dados <strong>não são números</strong>, como cores ou categorias.
                        </li>
                    </ul>
                </div>

                <div className="text-muted small">
                    <strong>Dica de prova:</strong><br />
                    Se a pergunta for “qual valor aparece mais vezes?”, a resposta envolve
                    diretamente a <strong>moda</strong>.
                </div>
            </NivelamentoCard>

            {/* CARD: QUESTAO MODA */}
            <QuestaoCard
                numero={5}
                fonte="IGEDUC — Prefeitura de Pombos — Auxiliar Administrativo (2023)"
                enunciado={
                    <p className="mb-0">
                        Um conjunto de dados é chamado de <strong>bimodal</strong> quando apresenta
                        duas modas, ou seja, dois valores são mais frequentes.
                    </p>
                }
                alternativas={[
                    "Certo",
                    "Errado",
                ]}
                correta="A"
                comentario={
                    <>
                        <p>
                            A afirmação está <strong>correta</strong>.
                        </p>

                        <p>
                            Quando <strong>dois valores</strong> aparecem com a maior frequência em um
                            conjunto de dados, dizemos que esse conjunto é <strong>bimodal</strong>.
                        </p>

                        <p className="mb-0">
                            Esse conceito está diretamente relacionado à <strong>moda</strong>, que
                            indica o valor mais frequente de uma série.
                        </p>

                        <div className="alert alert-success mt-3">
                            <strong>✔ Gabarito:</strong> Certo
                        </div>

                        <div className="alert alert-light border">
                            <strong>Dica de prova:</strong><br />
                            Se dois valores aparecem com a mesma maior frequência, o conjunto possui
                            <strong> duas modas</strong>.
                        </div>
                    </>
                }
            />

            {/* CARD: DISTRIBUICAO DE FREQUENCIA */}
            <NivelamentoCard
                title={
                    <>
                        <i className="bi bi-table me-2 text-success"></i>
                        Distribuição de Frequência
                    </>
                }
            >
                <p>
                    Uma <strong>distribuição de frequência</strong> é uma forma organizada de
                    apresentar dados, mostrando <strong>quantas vezes</strong> cada valor aparece
                    em uma série.
                </p>

                <div className="alert alert-light border">
                    <strong>O que significa cada coluna?</strong>
                    <ul className="mb-0 mt-2">
                        <li>
                            <strong>Frequência absoluta (fi):</strong> quantidade de vezes que o valor aparece.
                        </li>
                        <li>
                            <strong>Frequência acumulada (Fi):</strong> soma das frequências até aquele valor
                            (vai “acumulando”).
                        </li>
                    </ul>
                </div>

                <h6 className="fw-bold mb-3">
                    <i className="bi bi-card-list me-2"></i>
                    Exemplo (Idade × Frequências)
                </h6>

                <div className="table-responsive">
                    <table className="table table-bordered text-center align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>Idade</th>
                                <th>Frequência absoluta (fi)</th>
                                <th>Frequência acumulada (Fi)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>10</td><td>2</td><td>2</td></tr>
                            <tr><td>15</td><td>4</td><td>6</td></tr>
                            <tr><td>20</td><td>1</td><td>7</td></tr>
                            <tr><td>25</td><td>2</td><td>9</td></tr>
                            <tr><td>30</td><td>3</td><td>12</td></tr>
                        </tbody>
                        <tfoot>
                            <tr className="table-light">
                                <th>Total</th>
                                <th>12</th>
                                <th>—</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <hr />

                <h6 className="fw-bold mb-2">
                    <i className="bi bi-calculator me-2"></i>
                    Como a tabela ajuda a encontrar a Média
                </h6>

                <p className="mb-2">
                    A <strong>média</strong> não é a frequência absoluta.
                    A frequência absoluta só diz <strong>quantas pessoas</strong> têm cada idade.
                </p>

                <p className="mb-2">
                    Para calcular a média com tabela, fazemos:
                    <strong> (idade × frequência)</strong> e somamos tudo, depois dividimos pelo total.
                </p>

                <div className="alert alert-secondary">
                    <div className="fw-bold mb-2">Cálculo:</div>
                    <div className="text-center">
                        (10×2) + (15×4) + (20×1) + (25×2) + (30×3)
                        <br />
                        = 20 + 60 + 20 + 50 + 90 = <strong>240</strong>
                    </div>
                    <div className="text-center mt-2">
                        Média = 240 ÷ 12 = <strong>20</strong>
                    </div>
                </div>

                <hr />

                <h6 className="fw-bold mb-2">
                    <i className="bi bi-sort-numeric-down me-2"></i>
                    Como a tabela ajuda a encontrar a Mediana
                </h6>

                <p className="mb-2">
                    A <strong>frequência acumulada</strong> não é a mediana.
                    Ela serve para localizar <strong>onde está o “meio”</strong> da lista.
                </p>

                <div className="alert alert-light border">
                    <strong>Passo a passo (n = 12):</strong>

                    <p className="mt-2 mb-2">
                        Organizando os dados do menor para o maior, podemos imaginar as idades
                        ocupando as posições abaixo:
                    </p>

                    <div className="p-3 bg-white border rounded mb-3">
                        <strong>Fila de posições:</strong>

                        <div className="d-flex flex-wrap justify-content-center gap-2 mt-2">
                            <span className="badge bg-secondary">1ª<br />10</span>
                            <span className="badge bg-secondary">2ª<br />10</span>

                            <span className="badge bg-secondary">3ª<br />15</span>
                            <span className="badge bg-secondary">4ª<br />15</span>
                            <span className="badge bg-secondary">5ª<br />15</span>

                            {/* POSIÇÕES CENTRAIS */}
                            <span className="badge bg-success">6ª<br />15</span>
                            <span className="badge bg-success">7ª<br />20</span>

                            <span className="badge bg-secondary">8ª<br />25</span>
                            <span className="badge bg-secondary">9ª<br />25</span>

                            <span className="badge bg-secondary">10ª<br />30</span>
                            <span className="badge bg-secondary">11ª<br />30</span>
                            <span className="badge bg-secondary">12ª<br />30</span>
                        </div>
                    </div>

                    <ul className="mb-0">
                        <li>
                            Como existem <strong>12 valores</strong>, o meio da fila está entre a
                            <strong> 6ª</strong> e a <strong>7ª</strong> posições.
                        </li>

                        <li>
                            Pela visualização:
                            <ul>
                                <li>a <strong>6ª posição</strong> tem valor <strong>15</strong>;</li>
                                <li>a <strong>7ª posição</strong> tem valor <strong>20</strong>.</li>
                            </ul>
                        </li>

                        <li>
                            A mediana é a média desses dois valores:
                            <strong> (15 + 20) ÷ 2 = 17,5</strong>.
                        </li>
                    </ul>
                </div>


                <div className="text-muted small">
                    <strong>Resumo:</strong>
                    <ul className="mb-0">
                        <li><strong>fi</strong> ajuda a contar (quantas vezes aparece).</li>
                        <li><strong>Fi</strong> ajuda a achar a posição do meio (mediana).</li>
                        <li>A <strong>média</strong> vem de (valor × frequência) ÷ total.</li>
                    </ul>
                </div>
            </NivelamentoCard>

            {/* CARD: QUARTIS */}
            <div className="card nivelamento-card mb-4">
                <div className="card-body">

                    <h4 className="mb-3">
                        <i className="bi bi-bar-chart-steps me-2"></i>
                        Quartis (Q1, Q2 e Q3)
                    </h4>

                    {/* Conceito */}
                    <p>
                        Os <strong>quartis</strong> são <strong>medidas de posição</strong> que dividem um conjunto de dados
                        ordenados em <strong>quatro partes iguais</strong>, indicando a posição relativa dos valores
                        dentro da distribuição.
                    </p>

                    <p>
                        Cada quartil corresponde a um ponto do conjunto de dados:
                    </p>

                    <ul>
                        <li>
                            <strong>Q1 (Primeiro Quartil)</strong>: valor abaixo do qual estão aproximadamente <strong>25%</strong> dos dados;
                        </li>
                        <li>
                            <strong>Q2 (Segundo Quartil)</strong>: valor abaixo do qual estão aproximadamente <strong>50%</strong> dos dados
                            (<strong>é a mediana</strong>);
                        </li>
                        <li>
                            <strong>Q3 (Terceiro Quartil)</strong>: valor abaixo do qual estão aproximadamente <strong>75%</strong> dos dados.
                        </li>
                    </ul>

                    <div className="alert alert-info">
                        <strong>🔑 Dica de prova:</strong><br />
                        O intervalo entre <strong>Q1 e Q3</strong> contém aproximadamente os <strong>50% centrais </strong>
                        dos dados.
                    </div>

                    {/* Procedimento */}
                    <h6 className="fw-bold mt-4 mb-2">
                        🧠 Como encontrar os quartis em prova
                    </h6>

                    <p>
                        Em concursos, o procedimento mais comum é:
                    </p>

                    <ol>
                        <li><strong>Ordenar</strong> os dados do menor para o maior;</li>
                        <li>Localizar o <strong>Q2</strong> (mediana);</li>
                        <li>Separar o conjunto em duas partes (inferior e superior);</li>
                        <li>Encontrar o <strong>Q1</strong> na metade inferior;</li>
                        <li>Encontrar o <strong>Q3</strong> na metade superior.</li>
                    </ol>

                    <p className="mb-0">
                        Esse método é suficiente para a grande maioria das questões da banca <strong>CESGRANRIO</strong>.
                    </p>

                    {/* Atenção tabelas */}
                    <div className="alert alert-warning mt-3">
                        <strong>⚠ Atenção em tabelas e classes:</strong><br />
                        Em algumas questões, os quartis <strong>não são obtidos por cálculo numérico</strong>,
                        mas por <strong>localização conceitual</strong>.
                        <ul className="mb-0 mt-2">
                            <li><strong>Q1</strong>: região onde começa a acumular cerca de 25% dos dados;</li>
                            <li><strong>Q2</strong>: região central (mediana);</li>
                            <li><strong>Q3</strong>: região onde se alcança cerca de 75% dos dados.</li>
                        </ul>
                    </div>

                    {/* Exemplo simples */}
                    <h6 className="fw-bold mt-4 mb-2">
                        ✏ Exemplo simples
                    </h6>

                    <p className="fw-bold text-center">
                        2 &nbsp;&nbsp;•&nbsp;&nbsp; 4 &nbsp;&nbsp;•&nbsp;&nbsp; 6 &nbsp;&nbsp;•&nbsp;&nbsp; 8 &nbsp;&nbsp;•&nbsp;&nbsp; 10 &nbsp;&nbsp;•&nbsp;&nbsp; 12 &nbsp;&nbsp;•&nbsp;&nbsp; 14
                    </p>

                    <ul>
                        <li><strong>Q2 (mediana)</strong> = 8</li>
                        <li><strong>Q1</strong> = 4</li>
                        <li><strong>Q3</strong> = 12</li>
                    </ul>

                    <div className="alert alert-light border">
                        <strong>Interpretação:</strong><br />
                        Aproximadamente 50% dos valores estão entre <strong>4</strong> e <strong>12</strong>.
                    </div>

                    <div className="alert alert-light border mt-3">
                        <strong>🔢 Outra forma de localizar os quartis (por posição)</strong>
                        <p className="mt-2 mb-2">
                            Em alguns casos, os quartis também podem ser localizados por meio do
                            cálculo da posição que ocupam no conjunto ordenado.
                        </p>

                        <p className="mb-2">
                            Para um conjunto com <strong>n</strong> valores ordenados:
                        </p>

                        <ul>
                            <li><strong>Q1</strong> ocupa a posição: <strong>(n + 1) ÷ 4</strong></li>
                            <li><strong>Q2</strong> ocupa a posição: <strong>2(n + 1) ÷ 4</strong></li>
                            <li><strong>Q3</strong> ocupa a posição: <strong>3(n + 1) ÷ 4</strong></li>
                        </ul>

                        <p className="mb-2">
                            No nosso exemplo, temos <strong>n = 7</strong> valores:
                        </p>

                        <ul>
                            <li>
                                Q1 → (7 + 1) ÷ 4 = 2 → <strong>2ª posição</strong> → valor <strong>4</strong>
                            </li>
                            <li>
                                Q2 → 2(7 + 1) ÷ 4 = 4 → <strong>4ª posição</strong> → valor <strong>8</strong>
                            </li>
                            <li>
                                Q3 → 3(7 + 1) ÷ 4 = 6 → <strong>6ª posição</strong> → valor <strong>12</strong>
                            </li>
                        </ul>

                        <p className="mb-0">
                            O resultado é o mesmo obtido pelo método conceitual.
                        </p>
                    </div>
                    <h6 className="fw-bold mt-4 mb-2">
                        📊 Outro exemplo com tabela de frequência
                    </h6>

                    <p>
                        Em muitas questões, a banca apresenta os dados organizados em <strong>tabelas</strong> e pede a identificação
                        do <strong>primeiro quartil (Q1)</strong>, do <strong>segundo quartil (Q2)</strong> ou do
                        <strong> terceiro quartil (Q3)</strong>.
                        Em outros casos, a pergunta pode afirmar que determinado valor pertence a um quartil específico e solicitar
                        a interpretação dessa informação.
                        <br /><br />
                        Vamos ao nosso exemplo: <br /><br />
                        A tabela a seguir mostra a distribuição de alunos por faixa de nota em uma prova:
                    </p>


                    <div className="table-responsive mb-3">
                        <table className="table table-bordered text-center align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>Faixa de nota</th>
                                    <th>Frequência (fi)</th>
                                    <th>Frequência acumulada (Fi)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>0 – 20</td><td>5</td><td>5</td></tr>
                                <tr><td>21 – 40</td><td>7</td><td>12</td></tr>
                                <tr><td>41 – 60</td><td>10</td><td>22</td></tr>
                                <tr><td>61 – 80</td><td>6</td><td>28</td></tr>
                                <tr><td>81 – 100</td><td>4</td><td>32</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p>
                        Primeiro, somamos todas as frequências da tabela e verificamos que o
                        <strong> total de alunos é 32</strong>.
                    </p>

                    <p>
                        Em seguida, localizamos cada quartil observando a <strong>posição </strong>
                        que ele ocupa dentro desse total:
                    </p>

                    <ul>
                        <li>
                            <strong>Q1 (Primeiro quartil)</strong>: corresponde a aproximadamente
                            <strong> 25%</strong> dos dados.<br />
                            25% de 32 = 8.<br />
                            Portanto, o Q1 está na <strong>8ª posição</strong> da distribuição.
                            Observando a frequência acumulada, a 8ª posição está na faixa
                            <strong> 21 – 40</strong>.<br />
                        </li>

                        <li>
                            <strong>Q2 (Segundo quartil ou mediana)</strong>: corresponde a aproximadamente
                            <strong> 50%</strong> dos dados.<br />
                            50% de 32 = 16.<br />
                            Assim, o Q2 está na <strong>16ª posição</strong>, que se encontra na faixa
                            <strong> 41 – 60</strong>.
                        </li>

                        <li>
                            <strong>Q3 (Terceiro quartil)</strong>: corresponde a aproximadamente
                            <strong> 75%</strong> dos dados.<br />
                            75% de 32 = 24.<br />
                            Logo, o Q3 está na <strong>24ª posição</strong>, situada na faixa
                            <strong> 61 – 80</strong>.
                        </li>
                    </ul>

                    <div className="alert alert-success">
                        <strong>Interpretação:</strong><br />
                        Cerca de 25% dos alunos ficaram até a faixa 21–40,<br />
                        50% até a faixa 41–60 e<br />
                        75% até a faixa 61–80.
                    </div>


                    {/* IQR */}
                    <hr />

                    <h6 className="fw-bold mb-3">
                        <i className="bi bi-arrows-expand me-2"></i>
                        Desvio Interquartílico (IQR)
                    </h6>

                    <p>
                        O <strong>desvio interquartílico</strong> é uma medida que indica o
                        <strong> quanto os dados estão espalhados</strong> na parte mais importante
                        da distribuição: a <strong>região central</strong>.
                    </p>

                    <p>
                        Em vez de considerar todos os valores, ele observa apenas o intervalo entre
                        o <strong>primeiro quartil (Q1)</strong> e o <strong>terceiro quartil (Q3)</strong>,
                        que concentra aproximadamente <strong>50% dos dados</strong>.
                    </p>

                    <p className="fw-bold text-center">
                        IQR = Q3 − Q1
                    </p>

                    <p>
                        Assim, quanto <strong>maior</strong> for o valor do IQR, mais espalhados estão
                        os dados centrais. Quanto <strong>menor</strong>, mais concentrados eles estão.
                    </p>

                    <h6 className="fw-bold mt-3 mb-2">
                        🔍 Uso do IQR em provas
                    </h6>

                    <p>
                        Em concursos, o desvio interquartílico é frequentemente utilizado para
                        verificar a existência de <strong>valores atípicos</strong>, isto é,
                        valores muito distantes do comportamento típico do conjunto.
                    </p>

                    <p>
                        Para isso, a banca estabelece limites a partir do IQR:
                    </p>

                    <ul>
                        <li>
                            <strong>Limite inferior</strong>: Q1 − 1,5 · IQR
                        </li>
                        <li>
                            <strong>Limite superior</strong>: Q3 + 1,5 · IQR
                        </li>
                    </ul>

                    <div className="alert alert-info mb-0">
                        <strong>📌 Regra prática de prova:</strong><br />
                        Se o <strong>valor mínimo</strong> estiver abaixo do limite inferior,
                        ou se o <strong>valor máximo</strong> estiver acima do limite superior,
                        há indício de que esse valor pode ser <strong>atípico</strong> e deve ser analisado com cuidado.
                    </div>
                    <div className="alert alert-light border mt-3">
                        <strong>✏ Exemplo prático:</strong><br /><br />

                        Suponha que, em um conjunto de dados ordenado, temos:
                        <ul className="mb-2 mt-2">
                            <li><strong>Q1 = 40</strong></li>
                            <li><strong>Q3 = 60</strong></li>
                        </ul>

                        <p className="mb-2">
                            Então, o desvio interquartílico é:
                        </p>

                        <p className="fw-bold text-center mb-2">
                            IQR = 60 − 40 = 20
                        </p>

                        <p className="mb-2">
                            Agora calculamos os limites para identificar possíveis valores atípicos:
                        </p>

                        <ul className="mb-2">
                            <li><strong>Limite inferior</strong> = 40 − 1,5 · 20 = 40 − 30 = <strong>10</strong></li>
                            <li><strong>Limite superior</strong> = 60 + 1,5 · 20 = 60 + 30 = <strong>90</strong></li>
                        </ul>

                        <p className="mb-0">
                            Assim, valores <strong>menores que 10</strong> ou <strong>maiores que 90 </strong>
                            podem ser considerados <strong>atípicos</strong> nesse conjunto.
                        </p>
                    </div>

                </div>
            </div>


            {/* CARD: MINIMO E MAXIMO */}
            <NivelamentoCard
                title={
                    <>
                        <i className="bi bi-arrow-down-up me-2 text-success"></i>
                        Mínimo e Máximo
                    </>
                }
            >
                <p>
                    O <strong>mínimo</strong> e o <strong>máximo</strong> são medidas simples, mas
                    muito importantes na análise de uma série estatística.
                </p>

                <p>
                    Elas indicam, respectivamente, o <strong>menor</strong> e o <strong>maior </strong>
                    valor observado no conjunto de dados.
                </p>

                <div className="alert alert-secondary">
                    <strong>📌 Ideia central:</strong><br />
                    O mínimo e o máximo mostram os <strong>limites</strong> da série.
                </div>

                <hr />

                <h6 className="fw-bold mb-3">
                    <i className="bi bi-arrow-down-circle me-2"></i>
                    Mínimo
                </h6>

                <p>
                    O <strong>mínimo</strong> é o <strong>menor valor</strong> da série de dados.
                </p>

                <p className="fw-bold text-center">
                    4 &nbsp;•&nbsp; 7 &nbsp;•&nbsp; 9 &nbsp;•&nbsp; 12 &nbsp;•&nbsp; 15
                </p>

                <div className="alert alert-success">
                    <strong>✔ Mínimo:</strong> 4
                </div>

                <hr />

                <h6 className="fw-bold mb-3">
                    <i className="bi bi-arrow-up-circle me-2"></i>
                    Máximo
                </h6>

                <p>
                    O <strong>máximo</strong> é o <strong>maior valor</strong> da série de dados.
                </p>

                <p className="fw-bold text-center">
                    4 &nbsp;•&nbsp; 7 &nbsp;•&nbsp; 9 &nbsp;•&nbsp; 12 &nbsp;•&nbsp; 15
                </p>

                <div className="alert alert-success">
                    <strong>✔ Máximo:</strong> 15
                </div>

                <hr />

                <div className="alert alert-light border">
                    <strong>📌 Observação importante:</strong>
                    <p className="mb-0 mt-2">
                        Para identificar o mínimo e o máximo, é recomendável
                        <strong> ordenar os dados</strong>, mas isso não é obrigatório.
                        Basta localizar o menor e o maior valor.
                    </p>
                </div>

                <hr />

                <h6 className="fw-bold mb-3">
                    <i className="bi bi-graph-up-arrow me-2"></i>
                    Interpretação em provas
                </h6>

                <ul>
                    <li>
                        O <strong>mínimo</strong> indica o limite inferior dos dados;
                    </li>
                    <li>
                        O <strong>máximo</strong> indica o limite superior dos dados;
                    </li>
                    <li>
                        Essas medidas ajudam a entender a <strong>variação</strong> dos valores
                        apresentados.
                    </li>
                </ul>

                <div className="alert alert-light border">
                    <strong>Dica de prova:</strong><br />
                    Quando a questão perguntar pelo <strong>menor</strong> ou <strong>maior</strong>
                    valor observado, não há cálculo: basta identificar corretamente os extremos
                    da série.
                </div>

                <div className="text-muted small">
                    <strong>Conexão com o edital: </strong><br />
                    O valor <strong>máximo</strong> corresponde ao limite superior da série, que,
                    conceitualmente, encerra o último intervalo dos dados.
                </div>
            </NivelamentoCard>


            {/* QUESTÕES (ARQUIVO SEPARADO) — PADRÃO “FIM DA PÁGINA” */}
            <NivelamentoCard
                title={
                    <>
                        <i className="bi bi-bank me-2 text-success"></i>
                        Mais questões de Concursos
                    </>
                }
            >
                <p className="mb-0 text-muted">
                    Marque uma alternativa e clique em <strong>Ver gabarito</strong> para conferir o comentário.
                </p>
            </NivelamentoCard>

            {questoesMedidasTendenciaCentralConcurso
                .filter((q) => q.exibirNoNivelamento)
                .map((q) => {
                    const numeroExibido = q.numero + 5; // mantém após as 5 questões de fixação
                    return (
                        <QuestaoCard
                            key={q.id}
                            numero={numeroExibido}
                            banca={q.banca}
                            prova={q.prova}
                            ano={q.ano}
                            enunciado={q.enunciado}
                            alternativas={q.alternativas}
                            correta={q.correta}
                            comentario={q.comentario}
                            midia={q.midia}
                        />
                    );
                })}


        </NivelamentoLayout>
    );
}