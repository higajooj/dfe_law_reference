<!-- p.5 -->
# 2.1. Alterações de Campos

## 2.1.1. Inclusão do Referenciamento de NF-e por Chave com código numérico zerado (Campo refNFeSig)

Criação de campo específico no grupo de Documento Fiscal Referenciado (NFref) para permitir ao contribuinte referenciar Nota Fiscal Eletrônica, modelo 55, informando a Chave da NF-e com o código numérico zerado. Essa alteração visa garantir a manutenção do Sigilo Fiscal da NF-e referenciada.

A referência pela chave de acesso completa (campo: refNFe) ainda continua obrigatória nos casos de NF-e de devolução, complementar e quando a legislação exigir.

## 2.1.2. Alteração do número máximo de ocorrências do grupo de Documentos Fiscais Referenciados (tag: NFref)

O grupo de Documentos Fiscais Referenciados (tag: NFref) passou de um máximo de 500 para 999 ocorrências, para atender situações em que era necessário referenciar mais que 500 documentos numa mesma NF-e.
