<!-- p.6 -->
# 2.2. Manutenção do Cadastro Centralizado de GTIN (CCG)

Nos termos dos Ajustes SINIEF 07/05 e 09/16 é obrigação tributária dos donos de marca de produtos que possuírem GTIN informar e manter atualizados as informações destes códigos junto ao CNP, na página https://cnp.gs1br.org/ .

Pedidos de autorização de uso de NF-e ou de NFC-e **serão objeto de rejeição** caso um GTIN citado na nota fiscal não exista ou não esteja em conformidade com as regras do CCG, mesmo que o emitente não seja o dono da marca.

Portanto, é fundamental que os donos de marca insiram e mantenham atualizadas as informações cadastrais de produtos com GTIN atualizadas junto ao CNP, pois, caso não o façam, passarão, juntamente com seus clientes, a ter rejeitadas todas as notas fiscais com referência a mercadorias identificadas por este código, a partir da entrada em vigência da regra de validação específica para esta finalidade.

Caso o dado informado pelo dono da marca junto ao CNP esteja em desacordo com as regras do CCG publicadas na presente Nota Técnica, ao serem compartilhados os registros correspondentes serão rejeitados pelo CCG.

<!-- p.7 -->
O motivo da rejeição será informado para o CNP, de forma que a GS1 tenha condição de repassar esta informação para o dono da marca. A Tabela 1 contém a relação das validações efetuadas no CCG que ocasionarão a necessidade de correção, pelos donos de marca, do cadastro de GTIN no CNP.

*Tabela 1 – Validações Realizadas no CCG*

| Campo | Validação |
|---|---|
| GTIN | Dígito de Controle inválido |
| Descrição do Produto | Descrição do Produto muito genérica ou que não permita a identificação adequada do produto. Exemplo: “A definir”, “Disponível”, “Não informado(a)”, etc. |
| Inscrição do Dono da Marca no Cadastro da Receita Federal | CNPJ ou CPF inválido |
| NCM | Não informado o código do NCM do produto, ou informado um NCM inexistente |
| CEST | Se for o caso, não informado o código CEST para o produto, ou informado um CEST inexistente, ou informado código CEST incompatível com o NCM |
| Código de Classificação Geral do Produto (GPC) | Não informado o código de Classificação Geral do Produto (Segmento, Família, Classe e Subclasse), ou informado código existente, ou incompatível. |
| GTIN de nível inferior | Não informado GTIN contido ou informado GTIN contido com Dígito de Controle inválido |
| Demais campos | Obrigatoriedade de informação dos campos previstos |
