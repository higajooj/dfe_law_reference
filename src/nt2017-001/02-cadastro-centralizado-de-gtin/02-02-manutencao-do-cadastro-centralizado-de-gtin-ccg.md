<!-- p.08 -->
# 2.2 Manutenção do Cadastro Centralizado de GTIN (CCG)

Conforme citado, os Ajustes SINIEF 07/05 e 19/16 informam que os sistemas autorizadores da NF-e e NFC-e deverão validar as informações de GTIN devendo as notas serem rejeitadas quando não estiverem em conformidade com o CCG. Por isso, é fundamental que os donos de marca mantenham as informações cadastrais de produtos com GTIN atualizadas junto ao CCG, o que é feito através da manutenção atualizada do cadastro junto ao CNP da GS1.

Os registros rejeitados no CCG serão devolvidos pelo Fisco à GS1 para que a mesma disponibilize essa informação junto aos seus associados.

Segue relação das principais validações, efetuadas no CCG, que poderão levar à necessidade de correção, pelos donos de marca, do cadastro de GTIN no CNP-GS1:

| Campo | Validação |
|---|---|
| GTIN | Dígito de Controle inválido |
| Descrição do Produto | Descrição do Produto muito genérica ou que não permita a identificação adequada do produto. Exemplo: “A definir”, “Disponível”, “Não informado(a)”, etc. |
| Inscrição do Dono da Marca no Cadastro da Receita Federal | CNPJ ou CPF inválido |
| NCM | Não informado o código do NCM do produto, ou informado um NCM inexistente |
| CEST | Se for o caso, não informado o código CEST para o produto, ou informado um CEST inexistente, ou informado código CEST incompatível com o NCM |
| Código de Classificação Geral do Produto (GPC) | Não informado o código de Classificação Geral do Produto (Segmento, Família, Classe e Subclasse), ou informado código existente, ou incompatível. |
| GTIN de nível inferior (vinculado ao GTIN-14) | Não informado GTIN contido para o GTIN-14 ou Dígito de Controle inválido. |
