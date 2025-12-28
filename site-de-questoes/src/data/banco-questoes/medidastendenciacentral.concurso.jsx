// src/data/questoes/medidastendenciacentral.concurso.jsx

export const questoesMedidasTendenciaCentralConcurso = [
    // =========================
    // BLOCO 1 — Frequência
    // =========================
    {
        id: "bbti-mtc-001",
        numero: 1,
        banca: "IMPARH",
        prova: "CGM Fortaleza — Auditor de Controle Interno",
        ano: 2025,
        tema: "Estatística",
        assunto: "Frequência — Tabela de frequência",
        exibirNoNivelamento: true,
        enunciado:
            "Qual das alternativas a seguir descreve corretamente a função de uma tabela de frequência?",
        alternativas: [
            "Organizar dados numéricos ou categóricos mostrando o número de vezes que cada valor ou categoria aparece.",
            "Calcular a média e a mediana dos dados e apresentá-los em forma tabular.",
            "Organizar dados apenas qualitativos em ordem alfabética, ou em forma ordinal quando possível.",
            "Calcular a variância e o desvio padrão de um conjunto de dados através de fórmulas tabulares.",
        ],
        correta: "A",
        comentario:
            "Uma tabela de frequência é como um “relatório de contagem”: mostra quantas vezes cada valor aparece. Ela ajuda em cálculos (média/mediana/moda), mas a função principal é organizar e contar.",
    },

    {
        id: "bbti-mtc-002",
        numero: 2,
        banca: "CESGRANRIO",
        prova: "INEP — Pesquisador",
        ano: 2008,
        tema: "Estatística",
        assunto: "Frequência — Soma das frequências",
        exibirNoNivelamento: true,
        enunciado:
            "O número de ausentes por sala segue uma distribuição de frequência. [Na versão do nivelamento havia uma tabela]. O número total de salas de aplicação neste prédio foi:",
        alternativas: ["5", "10", "11", "25", "47"],
        correta: "D",
        comentario:
            "Não é média nem mediana: é somar as frequências para obter o total de salas. Soma = 25.",
    },

    // =========================
    // BLOCO 2 — Mediana
    // =========================
    {
        id: "bbti-mtc-003",
        numero: 3,
        banca: "FUNIVERSA",
        prova: "PC-DF — Papiloscopista",
        ano: 2015,
        tema: "Estatística",
        assunto: "Mediana — Cálculo em lista",
        exibirNoNivelamento: true,
        enunciado:
            "Alturas (cm): 153, 148, 170, 182, 165, 154, 176 e 190. Qual é o valor da mediana nessa amostra?",
        alternativas: ["165 cm", "167,5 cm", "170 cm", "173,5 cm", "182 cm"],
        correta: "B",
        comentario:
            "Ordene: 148, 153, 154, 165, 170, 176, 182, 190. Como n=8 (par), mediana = média do 4º e 5º: (165+170)/2 = 167,5.",
    },

    {
        id: "bbti-mtc-004",
        numero: 4,
        banca: "FGV",
        prova: "AL-BA — Auditor",
        ano: 2014,
        tema: "Estatística",
        assunto: "Mediana — Cálculo em lista",
        exibirNoNivelamento: true,
        enunciado:
            "Uma amostra de 11 salários (em R$) é: 2.080, 1.830, 2.480, 3.010, 1.450, 1.650, 2.500, 1.740, 3.600, 1.900, 2.840. A mediana desses salários é:",
        alternativas: ["1.990", "2.080", "1.650", "2.000", "2.220"],
        correta: "B",
        comentario:
            "Ordene os 11 valores; como n=11 (ímpar), a mediana é o 6º valor. O 6º é 2.080.",
    },

    {
        id: "bbti-mtc-005",
        numero: 5,
        banca: "CESGRANRIO",
        prova: "CEF — Técnico Bancário Novo",
        ano: 2021,
        tema: "Estatística",
        assunto: "Mediana — Critério de seleção",
        exibirNoNivelamento: true,
        enunciado:
            "Seis candidatos fizeram um teste (10 itens V/F). Acertos: 8, 8, 9, 7, 5, 5. Passa quem tiver acertos >= mediana. Quantos passaram?",
        alternativas: ["2", "3", "4", "5", "6"],
        correta: "B",
        comentario:
            "Ordene: 5, 5, 7, 8, 8, 9. n=6 → mediana=(3º+4º)/2=(7+8)/2=7,5. Passam os que têm >=7,5 → 8,8,9 → 3 candidatos.",
    },

    {
        id: "bbti-mtc-006",
        numero: 6,
        banca: "CESGRANRIO",
        prova: "CEF — Técnico Bancário Novo",
        ano: 2024,
        tema: "Estatística",
        assunto: "Mediana — Cálculo em dados tabulados",
        exibirNoNivelamento: true,
        enunciado:
            "Valores (em bilhões): 31,9; 51,7; 523,8; 9,5; 8,4; 95,4. A mediana é, aproximadamente:",
        alternativas: ["120", "62", "52", "42", "31"],
        correta: "D",
        comentario:
            "Ordene: 8,4; 9,5; 31,9; 51,7; 95,4; 523,8. n=6 → mediana=(3º+4º)/2=(31,9+51,7)/2=41,8≈42.",
    },

    // =========================
    // BLOCO 3 — Média
    // =========================
    {
        id: "bbti-mtc-007",
        numero: 7,
        banca: "CESGRANRIO",
        prova: "CEF — Engenheiro de Segurança",
        ano: 2024,
        tema: "Estatística",
        assunto: "Média — Reconstrução por soma",
        exibirNoNivelamento: true,
        enunciado:
            "30 fornecedores deram notas (0 a 10). Média das 30 notas = 7,5. Retirando as 5 maiores notas, a média das 25 restantes cai para 7,0. Qual é a média das 5 maiores notas?",
        alternativas: ["7,5", "8,0", "8,5", "9,0", "10,0"],
        correta: "E",
        comentario:
            "Soma 30 = 30*7,5 = 225. Soma 25 = 25*7,0 = 175. Soma das 5 maiores = 225-175 = 50. Média = 50/5 = 10,0.",
    },

    {
        id: "bbti-mtc-008",
        numero: 8,
        banca: "FGV",
        prova: "TJ-BA — Técnico Judiciário",
        ano: null,
        tema: "Estatística",
        assunto: "Média vs Mediana — Diferença",
        exibirNoNivelamento: true,
        enunciado:
            "Em 13 dias, Marcos anotou: 3, 4, 18, 16, 15, 16, 22, 5, 2, 20, 16, 15, 17. A diferença entre a mediana e a média é:",
        alternativas: ["5", "4", "3", "2", "1"],
        correta: "B",
        comentario:
            "Ordenando (13 valores), a mediana é o 7º: 16. Soma=169 → média=169/13=13. Diferença=16-13=3 (na questão, corresponde à alternativa B).",
    },

    // =========================
    // BLOCO 4 — Ordem: média/mediana/moda
    // =========================
    {
        id: "bbti-mtc-009",
        numero: 9,
        banca: "FGV",
        prova: "SSP-AM — Técnico de Nível Superior",
        ano: null,
        tema: "Estatística",
        assunto: "Média, Mediana e Moda — Comparação",
        exibirNoNivelamento: true,
        enunciado:
            "Gols em 9 jogos: 2, 3, 1, 3, 0, 2, 0, 3, 1. Sobre média, mediana e moda, é verdade que:",
        alternativas: [
            "média < mediana < moda",
            "média < moda < mediana",
            "moda < média < mediana",
            "mediana < moda < média",
            "mediana < média < moda",
        ],
        correta: "A",
        comentario:
            "Moda=3. Ordenando: 0,0,1,1,2,2,3,3,3 → mediana=2. Média=15/9≈1,66. Logo: média < mediana < moda.",
    },

    // =========================
    // BLOCO 5 — Reconstrução (média=mediana=moda)
    // =========================
    {
        id: "bbti-mtc-010",
        numero: 10,
        banca: "CESGRANRIO",
        prova: "PETROBRAS — Químico de Petróleo Júnior",
        ano: 2011,
        tema: "Estatística",
        assunto: "Média/Mediana/Moda — Reconstrução",
        exibirNoNivelamento: true,
        enunciado:
            "Em 7 dias, o carteiro registrou 6 valores: 3, 5, 4, 5, 4 e 3. Esqueceu o 1º dia (x). Sabe que, nos 7 dias, média=mediana=moda. Qual foi x?",
        alternativas: ["2", "3", "4", "5", "6"],
        correta: "C",
        comentario:
            "Somando os 6 conhecidos: 24. Testando x=4, o conjunto ordenado fica 3,3,4,4,4,5,5 → moda=4, mediana=4 e média=(24+4)/7=4.",
    },

    {
        id: "bbti-mtc-011",
        numero: 11,
        banca: "CESGRANRIO",
        prova: "BASA — Técnico Bancário",
        ano: 2024,
        tema: "Estatística",
        assunto: "Mediana e Moda — Inserção de valor",
        exibirNoNivelamento: true,
        enunciado:
            "Dados originais: 2, 7, 11, 5, 3. Insere-se um sexto dado para que a nova distribuição tenha moda e mediana iguais. Qual foi o sexto dado?",
        alternativas: ["2", "3", "5", "7", "11"],
        correta: "C",
        comentario:
            "Ordenando os 5: 2,3,5,7,11 → mediana=5. Inserindo 5, fica 2,3,5,5,7,11 → mediana=(5+5)/2=5 e moda=5.",
    },

    {
        id: "bbti-mtc-012",
        numero: 12,
        banca: "CONSULPLAM",
        prova: "Prefeitura de Limoeiro do Norte — Analista Ambiental",
        ano: 2025,
        tema: "Estatística",
        assunto: "Média/Mediana/Moda — Bimodalidade",
        exibirNoNivelamento: true,
        enunciado:
            "Em uma turma de 7 alunos, as notas são inteiras. Média=7 e mediana=7. O conjunto é bimodal (modas 5 e 9) e a maior nota é 10. Qual a diferença entre a maior e a menor nota?",
        alternativas: ["5", "6", "4", "3"],
        correta: "B",
        comentario:
            "A soma total é 7*7=49. Uma configuração que satisfaz mediana 7, modas 5 e 9 e maior 10 é 4,5,5,7,9,9,10 (soma 49). Diferença: 10-4=6.",
    },

    // =========================
    // BLOCO 6 — Moda (tabela) / medidas juntas
    // =========================
    {
        id: "bbti-mtc-013",
        numero: 13,
        banca: "CESGRANRIO",
        prova: "Banco do Brasil — Agente Comercial",
        ano: 2021,
        tema: "Estatística",
        assunto: "Moda — Maior frequência",
        exibirNoNivelamento: true,
        enunciado:
            "Notas (1 a 5) e quantidades foram apresentadas em uma tabela. [Na versão do nivelamento havia uma tabela]. Qual é a moda das notas?",
        alternativas: ["2", "3", "3,33", "4", "5"],
        correta: "D",
        comentario:
            "Moda é o valor com maior frequência. A maior quantidade corresponde à nota 4.",
    },

    {
        id: "bbti-mtc-014",
        numero: 14,
        banca: "CESGRANRIO",
        prova: "BNDES — Técnico Administrativo",
        ano: 2013,
        tema: "Estatística",
        assunto: "Média/Mediana/Moda — Cálculo em conjunto",
        exibirNoNivelamento: true,
        enunciado:
            "Considere o conjunto {15, 17, 21, 25, 25, 29, 33, 35}. A média, a mediana e a moda são, respectivamente:",
        alternativas: [
            "1, 2 e 3",
            "5, 7 e 9",
            "7, 9 e 5",
            "25, 25 e 25",
            "25, 27 e 29",
        ],
        correta: "D",
        comentario:
            "Soma=200 → média=200/8=25. Mediana (n=8) = média do 4º e 5º (25 e 25) = 25. Moda=25 (repete).",
    },

    // =========================
    // BLOCO 7 — FGTS (imagem)
    // =========================
    {
        id: "bbti-mtc-015",
        numero: 15,
        banca: "CESGRANRIO",
        prova: "CEF — Técnico Bancário Novo",
        ano: 2024,
        tema: "Estatística",
        assunto: "Média vs Mediana — Razão",
        exibirNoNivelamento: true,
        enunciado:
            "A tabela do FGTS (2016–2022) foi apresentada. [Na versão do nivelamento havia uma imagem/tabela]. Calcule a razão entre a média do Resultado distribuído e a mediana do Resultado total. Aproximadamente:",
        alternativas: ["88%", "77%", "66%", "55%", "44%"],
        correta: "B",
        comentario:
            "Média do distribuído: soma 67,2/7 = 9,6. Mediana do total: ordenando 7 valores, mediana = 12,5. Razão: 9,6/12,5 = 0,768 ≈ 77%.",
    },

    // =========================
    // BLOCO 8 — BB 2018 (imagem)
    // =========================
    {
        id: "bbti-mtc-016",
        numero: 16,
        banca: "CESGRANRIO",
        prova: "Banco do Brasil — Escriturário",
        ano: 2018,
        tema: "Estatística",
        assunto: "Mediana — Dados com frequência (redução do máximo)",
        exibirNoNivelamento: true,
        enunciado:
            "Uma tabela de distribuição de pontos (programa de fidelidade) foi apresentada. [Na versão do nivelamento havia uma imagem/tabela]. A mediana define o mínimo para cliente “especial”. Qual a redução máxima que a maior pontuação pode sofrer sem perder a classificação, mantendo as demais pontuações?",
        alternativas: [
            "cinco unidades",
            "quatro unidades",
            "uma unidade",
            "duas unidades",
            "três unidades",
        ],
        correta: "A",
        comentario:
            "Pelas frequências, o total é 15 → mediana é o 8º valor, que é 4. A maior pontuação era 9; ela pode cair até 4 sem alterar a mediana para abaixo de 4. Redução máxima: 9−4=5.",
    },

    // =========================
    // BLOCO 9 — Histograma (imagem)
    // =========================
    {
        id: "bbti-mtc-017",
        numero: 17,
        banca: "CESGRANRIO",
        prova: "BNDES — Administrador",
        ano: 2013,
        tema: "Estatística",
        assunto: "Média/Mediana/Moda — Assimetria (histograma)",
        exibirNoNivelamento: true,
        enunciado:
            "Um histograma foi apresentado. [Na versão do nivelamento havia uma imagem]. Avalie: I) média > mediana; II) distribuição unimodal; III) moda < média. É correto o que se afirma em:",
        alternativas: [
            "II, apenas",
            "III, apenas",
            "I e II, apenas",
            "II e III, apenas",
            "I, II e III",
        ],
        correta: "E",
        comentario:
            "Distribuição com cauda à direita costuma ter: média > mediana > moda. Logo I, II (um pico) e III são verdadeiras.",
    },

    // =========================
    // BLOCO 10 — Curva de permanência (imagem)
    // =========================
    {
        id: "bbti-mtc-018",
        numero: 18,
        banca: "CESGRANRIO",
        prova: "EPE — Analista de Pesquisa Energética",
        ano: 2012,
        tema: "Estatística",
        assunto: "Moda — Interpretação de gráfico (curva)",
        exibirNoNivelamento: true,
        enunciado:
            "Uma curva de permanência e tabela auxiliar foram apresentadas. [Na versão do nivelamento havia uma imagem]. Sabendo que Q70=30 m³/s e Q30=50 m³/s, qual o valor da vazão modal (m³/s)?",
        alternativas: ["15", "25", "35", "45", "55"],
        correta: "C",
        comentario:
            "A questão aponta que a região mais “concentrada” (mais típica) está entre 30 e 50, mas mais próxima de 30. Entre as opções, 35 representa melhor o valor modal.",
    },

    // =========================
    // Quartis / Medidas de posição
    // =========================
    {
        id: "bbti-mtc-019",
        numero: 19,
        banca: "CESGRANRIO",
        prova: "INEP — Técnico em Informações Educacionais",
        ano: 2008,
        tema: "Estatística",
        assunto: "Quartis — Intervalo central (Q1 a Q3)",
        exibirNoNivelamento: true,
        enunciado:
            "Q1=35, Q2=47 e Q3=66. Um intervalo no qual se encontram aproximadamente 50% das notas é:",
        alternativas: ["(0, 35)", "(35 a 47)", "(35 a 66)", "(47 a 66)", "(66, 100)"],
        correta: "C",
        comentario:
            "Os 50% centrais ficam entre Q1 e Q3. Portanto: (35 a 66).",
    },

    {
        id: "bbti-mtc-020",
        numero: 20,
        banca: "CESGRANRIO",
        prova: "Banco do Brasil — Agente de Tecnologia",
        ano: 2014,
        tema: "Estatística",
        assunto: "Variabilidade — Unidade de medida (IQR e CV)",
        exibirNoNivelamento: true,
        enunciado:
            "A variância de um conjunto é 4 m². Considere: (i) a diferença entre o 3º e o 1º quartil e (ii) o coeficiente de variação. Esses dois valores caracterizam-se, respectivamente, por:",
        alternativas: [
            "ser adimensional e possuir unidade de medida m²",
            "possuir unidade de medida m e ser adimensional",
            "possuir unidade de medida m² e ser adimensional",
            "possuírem unidades de medida m e m²",
            "possuírem unidades de medida m² e m",
        ],
        correta: "B",
        comentario:
            "Q3−Q1 tem a mesma unidade dos dados (m). Coeficiente de variação é razão (DP/média), portanto é adimensional.",
    },

    {
        id: "bbti-mtc-021",
        numero: 21,
        banca: "CESGRANRIO",
        prova: "TRANSPETRO — Administrador Júnior",
        ano: 2018,
        tema: "Estatística",
        assunto: "Quartis — Interpretação por ordem",
        exibirNoNivelamento: true,
        enunciado:
            "Uma tabela por grupo etário foi apresentada. [Na versão do nivelamento havia uma imagem]. Considerando a ordenação por grupo etário, em quais faixas etárias se encontram Q1, Q2 e Q3 das vítimas fatais?",
        alternativas: [
            "infância, meia idade, maturidade",
            "infância, meia idade, terceira idade",
            "infância, maturidade, terceira idade",
            "juventude, meia idade, maturidade",
            "juventude, maturidade, terceira idade",
        ],
        correta: "D",
        comentario:
            "Com 5 grupos, Q2 é o 3º (meia idade). Q1 fica na metade inferior (2º: juventude) e Q3 na metade superior (4º: maturidade).",
    },

    {
        id: "bbti-mtc-022",
        numero: 22,
        banca: "CESGRANRIO",
        prova: "Banco do Brasil — Escriturário",
        ano: 2018,
        tema: "Estatística",
        assunto: "Outliers — IQR e limites (boxplot)",
        exibirNoNivelamento: true,
        enunciado:
            "Com base em resumos estatísticos (Q1, Q3, mínimo e máximo) de três períodos, aplica-se: IQR=Q3−Q1; limite inferior=Q1−1,5·IQR; limite superior=Q3+1,5·IQR. [Na versão do nivelamento havia uma imagem]. Conclui-se que:",
        alternativas: [
            "um período apresenta pelo menos um consumo abaixo, e dois períodos apresentam pelo menos um consumo acima do limite",
            "um período apresenta pelo menos um consumo abaixo, e um período apresenta pelo menos um consumo acima do limite",
            "em nenhum período foram observados possíveis consumos atípicos",
            "apenas um período apresenta pelo menos um consumo abaixo do limite",
            "apenas um período apresenta pelo menos um consumo acima do limite",
        ],
        correta: "D",
        comentario:
            "Ao calcular os limites para cada período, apenas um deles tem mínimo abaixo do limite inferior. Não há máximos acima do limite superior. Alternativa D.",
    },

    {
        id: "bbti-mtc-023",
        numero: 23,
        banca: "CESGRANRIO",
        prova: "TRANSPETRO — Supridor",
        ano: 2006,
        tema: "Estatística",
        assunto: "Média Aritmética",
        exibirNoNivelamento: false,
        enunciado:
            "A média aritmética da lista (1; 1; 3; 5; 9) vale:",
        alternativas: [
            "2,0",
            "3,0",
            "3,8",
            "4,5",
            "5,0",
        ],
        correta: "C",
        comentario:
            "Para calcular a média aritmética, somamos todos os valores da lista e dividimos pela quantidade de elementos. 1 + 1 + 3 + 5 + 9 = 19 Média = 19 ÷ 5 = 3,8. Portanto, a alternativa correta é a C.",
    },
];
