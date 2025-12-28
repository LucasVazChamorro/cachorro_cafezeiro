{
    questoesBigDataConcurso.map((q) => (
        <QuestaoCard key={q.id} {...q} />
    ))
}

/* exibir_no_nivelamento BOOLEAN DEFAULT false - futuramente quando tiver banco de dados postrgree*/
// Página de Banco de Questões de Big Data
// Será utilizada futuramente quando houver filtros e painel administrativo
