<!-- p.46 -->
# 4.6 Serviço de Consulta Cadastro (NFeConsultaCadastro)

- **Função:** Serviço para consultar o cadastro de contribuintes do ICMS da unidade federada.
- **Processo:** síncrono.
- **Método:** consultaCadastro

Esse Web Service oferece a consulta pública do cadastro de contribuintes do ICMS de uma unidade federada.

Qualquer UF poderá oferecer o Web Service, sendo obrigatório para as UFs que autorizam a emissão de qualquer espécie de Documento Fiscal eletrônico - DF-e.

Apenas as empresas autorizadas a emitir Documentos Fiscais eletrônicos utilizarão esse serviço. A UF que oferecer o Web Service verificará se o CNPJ da empresa solicitante consta no cadastro nacional de emissores de Documentos Fiscais eletrônicos - DF-e.

A identificação da empresa solicitante do serviço será realizada através do CNPJ contido na extensão otherName – OID=2.16.76.1.3.3 do certificado digital utilizado na conexão TLS.

Importante ressaltar que esse Web Service não tem a mesma disponibilidade dos demais Web Services do MDFe, em razão disto, sugere-se que não se implemente esse serviço dentro do fluxo normal de emissão do MDFe e sim como um serviço alternativo.

O aplicativo do contribuinte envia a solicitação para o Web Service da Secretaria de Fazenda Estadual. Ao recebê-la, a aplicação do Portal da Secretaria de Fazenda Estadual processará a solicitação de consulta, validando o argumento de pesquisa informado (CNPJ ou CPF ou IE), e retornará mensagem contendo a situação cadastral atual do contribuinte no cadastro de contribuintes do ICMS.

## 4.6.1 Onde obter as Definições deste Web Service

As definições do Web Service de Consulta Cadastro encontram-se centralizadas no manual da Nota Fiscal Eletrônica. Para informações mais detalhadas, consultar o Manual de Orientações do Contribuinte da NFe, disponível em http://www.nfe.fazenda.gov.br.

## 4.6.2 Onde obter os Schemas XML deste Web Service

Os schemas XML utilizados pelo Web Service de Consulta Cadastro encontram-se disponíveis no endereço http://www.nfe.fazenda.gov.br.
