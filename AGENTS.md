# Convenções da transcrição

Instruções para adicionar novos documentos ao livro.

- A transcrição fica em `src/<documento>/`.
- Texto transcrito literalmente em pt-BR, conferindo o conteúdo e a apresentação visual das fontes correspondentes.
- `<!-- p.NN -->` marca o início da página NN do PDF original.
- Texto ~~riscado~~ no original é mantido como `~~texto~~` seguido de um aviso `> **Revogado/Descontinuado:** …`. Texto sem marcação permanece conforme a fonte; não inferir revogação apenas pela idade do trecho ou por sua presença no histórico de versões.
- `**[Em vigor desde NT xxxx.xxx]**` / `**[Descontinuado]**` só são acrescentados quando a própria página declara.
- `<!-- REVISAR p.NN: motivo -->` marca trecho ilegível ou ambíguo.
- Tabelas de leiaute mantêm as colunas originais (`# | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação`);
  linhas de destaque (grupos/raiz) em **negrito**.
- Figuras: `img/` com legenda; fluxos simples redesenhados em mermaid.
- Cabeçalhos/rodapés de página são omitidos. Os índices (Sumário, Ilustrações, Tabelas, Schemas) são substituídos pelo `SUMMARY.md`.
- Cada documento é uma única entrada de primeiro nível no `SUMMARY.md`, com um `index.md` de capa; os capítulos ficam aninhados sob ela e seus títulos trazem a numeração original do documento; cada seção numerada de primeiro nível do documento (e cada subseção `N.M` dos capítulos divididos) tem sua própria página e entrada, nunca faixas como `N–M.`. Seções sem número no original permanecem sem número.
