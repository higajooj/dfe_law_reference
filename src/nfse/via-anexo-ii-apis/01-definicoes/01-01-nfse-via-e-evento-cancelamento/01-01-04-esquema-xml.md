# 1.1.4 Esquema (Schema) para Arquivos XML na NFS-e Via

A estrutura dos arquivos XML recebidos pelo Ambiente Nacional da NFS-e Via é definida e verificada por meio de um Esquema (Schema), uma linguagem que estabelece as regras para a estruturação do documento XML. O Schema descreve os elementos, sua organização e as regras de preenchimento de conteúdo, garantindo a obrigatoriedade de cada elemento ou grupo de informações.

**Representação Física do Schema**

O Schema é representado fisicamente por um arquivo com extensão XSD (XML Schema Definition). Este arquivo define quaisquer elementos que podem ou não estar presentes no XML, bem como as regras que governam a estrutura do documento.

**Validação da Estrutura XML**

A validação da estrutura XML é realizada por um analisador sintático (parser), que verifica se a mensagem atende às definições e regras estabelecidas no Schema. Qualquer divergência entre a estrutura do XML e o Schema resultará em um erro de validação.

**Localização da Definição do XML**

<!-- p.04 -->
A definição do XML para NFS-e Via encontra-se detalhada no documento "LeiauteRN_NFSeVia&Eventos-ANNFSeVia."

**Disponibilidade dos Schemas**

<!-- REVISAR p.04: o nome do portal e o endereço aparecem como placeholders no original ("XXXXX", "portalxxxxx") e o colchete do endereço não é fechado; transcrito literalmente -->
Os Schemas (XSD) que definem os arquivos XML aceitos estão disponíveis no Portal XXXXX. [Endereço: https://www.portalxxxxx.com.br/schemas.

**Tipos de Schema**

Os seguintes tipos de Schema estão disponíveis:

1. Documento Eletrônico – NFS-e Via
   - Define a estrutura do XML para a NFS-e Via.
2. Documento Eletrônico – Evento de Cancelamento
   - Contém os Schemas para os eventos de negócio relacionados ao cancelamento, previstos para serem enviados ao Ambiente Nacional da NFS-e Via.

Esta organização visa garantir que os arquivos XML sejam consistentes e seguros, atendendo às exigências legais e operacionais do sistema NFS-e Via.
