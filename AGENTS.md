# Convenções da transcrição

Instruções para adicionar novos documentos ao livro.

## Fluxo de trabalho (para PDFs)

- Primeiro converta cada arquivo PDF para HTML com `pdftohtml -c -s`.
- Faça a transcrição com base apenas no HTML e nos arquivos de imagem gerados; recorra ao PDF original somente se for necessário ou em caso de dúvida.
- Execute o trabalho em paralelo com agentes (um por documento).

## Fluxo de trabalho (para DOCX)

- Procedimento análogo ao dos PDFs: primeiro exporte cada arquivo DOCX para HTML (por exemplo, com `libreoffice --headless --convert-to html`), mantendo a estrutura geral do documento (títulos, listas, tabelas e imagens).
- Faça a transcrição com base apenas no HTML e nos arquivos de imagem gerados; recorra ao DOCX original somente se for necessário ou em caso de dúvida.
- Execute o trabalho em paralelo com agentes (um por documento).

## Convenções

- A transcrição fica em `src/<categoria>/<documento>/`, com uma pasta por tipo de documento fiscal (`nfe`, `cte`, `mdfe`, …).
- No `SUMMARY.md`, os títulos de parte seguem `# <Categoria> · <Tipo>` (por exemplo `# NF-e/NFC-e · Notas Técnicas`); o catálogo da página inicial é gerado a partir deles. As notas técnicas são listadas da mais recente para a mais antiga.
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
- Estrutura de pastas: todo item de primeiro nível do documento é uma pasta, mesmo quando contém um único arquivo.
  - Capítulo `N` vira `NN-slug/`, com o capítulo em `index.md` e as subseções como arquivos dentro da pasta, por exemplo `02-consideracoes-iniciais/02-01-objetivos.md`.
  - Seção sem número vira `slug/index.md`, sem número no nome.
  - Pasta com página única usa `index.md`.
  - Capítulo sem arquivo de capítulo na fonte vira pasta só com o número (`NN/`), sem `index.md`, contendo as subseções.
- Números com dois dígitos em todos os níveis (`5.10.4` → `05-10-04`), para que `02` venha antes de `10`.
- Imagens ficam em `img/` na raiz do documento. Links a partir de uma pasta de capítulo usam `../img/`; cada nível extra de pasta acrescenta um `../`.
