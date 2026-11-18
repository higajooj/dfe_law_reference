# 1.1.1. Métodos

**a) GET /DFe/{NSU}**

Retorna os documentos fiscais de serviço correspondente ao NSU informado. O solicitante informa um NSU e o sistema nacional retorna o DF-e associado. Este método foi atualizado para atender a alternância de perfis e procurações, sendo disponibilizados os seguintes tipos de consultas:

**Consulta do próprio contribuinte:** sem informar cnpjConsulta/cpfConsulta, são retornados os documentos do contribuinte identificado pelo certificado de transmissão .

**Consulta por CNPJ do mesmo CNPJ base:** cnpjConsulta deve ser sempre informado com 14 dígitos (CNPJ completo, com dígito verificador válido). Se os 8 primeiros dígitos (CNPJ base) coincidirem com o CNPJ base do certificado de transmissão, a consulta é autorizada sem necessidade de procuração.

**Consulta mediante procuração:** é necessária para consultar os documentos de outro contribuinte, ou seja:

- **cnpjConsulta** (14 dígitos) com CNPJ base diferente do CNPJ base do certificado de transmissão; ou
- **cpfConsulta** (11 dígitos) diferente do CPF do certificado de transmissão.

Nesses casos, a inscrição consultada deve ter outorgado procuração válida ao titular do certificado. Sem procuração, a requisição é rejeitada com o erro E2245. As procurações devem ser cadastradas pelo outorgante no Portal de Serviços da Receita Federal (<https://servicos.receitafederal.gov.br/>).

**Atenção:** os parâmetros **cnpjConsulta** e **cpfConsulta** não podem ser informados juntos. Se ambos forem preenchidos, a requisição é rejeitada com o erro E2244.

Lista completa de mensagens de erro, verificar **item 1.1.2**

**Tipo da consulta:** a resposta informa, na propriedade TipoConsulta, como a consulta foi autorizada: InscricaoCertificado (documentos do próprio titular do certificado), CnpjBase (CNPJ consultado com o mesmo CNPJ base do certificado) ou Procuracao (consulta de outra inscrição mediante procuração). Nas respostas de rejeição, o valor padrão é InscricaoCertificado.

**b) GET – /NFSe/{ChaveAcesso}/Eventos**

<!-- p.04 -->

Retorna os Documentos Fiscais de Serviço do tipo Evento vinculados à chave de acesso informada.

Consulta eventos por chave de acesso. O solicitante informa a chave de acesso de uma NFS-e e a API retorna todos os eventos vinculados à chave de acesso de NFS-e informada na consulta.
