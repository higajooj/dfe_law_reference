<!-- p.3 -->
# 3. Obrigatoriedade de informação do NCM

O Ajuste SINIEF 22/13, publicado em 06/12/2013, estabelece que a partir de 01 de Julho de 2014, para o modelo 55, e a partir de 01 de janeiro de 2015, para o modelo 65, a identificação das mercadorias na NF-e deverá conter o seu correspondente código estabelecido na Nomenclatura Comum do Mercosul (NCM) completo, não sendo mais aceita a possibilidade de informar apenas o capítulo (dois dígitos).

Serão implementadas regras de validação para exigir, em um primeiro momento, o preenchimento de oito dígitos no campo relativo ao código NCM (regra GI05). Em futuro próximo será implementada a validação GI05.1, e somente serão aceitos valores de NCM que existam na tabela correspondente, publicada pelo Ministério do Desenvolvimento, Indústria e Comércio Exterior - MDIC.

Detalhes sobre esta Nomenclatura, incluindo a estrutura da codificação e todos os códigos disponíveis para utilização podem ser encontrados na página do MDIC, nos itens “Regras de interpretação” e “Notas Explicativas do Sistema Harmonizado de Codificação e Classificação de Mercadorias (NESH)”. Em especial, as mercadorias que não possam ser classificadas por aplicação das Regras acima enunciadas classificam-se na posição correspondente aos artigos mais semelhantes.

A solução de consultas sobre classificação fiscal de mercadorias é de competência da Receita Federal do Brasil (RFB), por intermédio da Coordenação-Geral do Sistema Aduaneiro e da Superintendência Regional da Receita Federal. Em caso de dúvidas sobre a correta classificação fiscal de mercadorias, o interessado deverá contatar a Unidade da Receita Federal do seu domicílio fiscal, formulando consulta por escrito, de acordo com as orientações constantes no site dessa Secretaria, na seguinte página: http://www.receita.fazenda.gov.br/guiacontribuinte/consclassfiscmerc.htm.

**Outros esclarecimentos:**

1. Caso o item da nota se refira a um serviço tributado pelo ISS ou a nota seja de ajuste, neste campo deverá ser informado o código “00” (dois zeros)
2. Em caso de nota complementar que se refira a um daqueles dois casos também poderá ser informado o código “00” neste campo
3. Se o item da nota se referir a mercadoria ou outra operação que não possa ser classificada segundo a tabela da NCM, seguidas as normas do MDIC, este campo deverá ser preenchido com o código “00000000” (oito zeros)

Alterado o *Schema* XML para não acusar falha de *Schema* quando for informado o código “00000000”.
