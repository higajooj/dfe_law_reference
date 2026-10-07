<!-- p.5 -->
# 4. Web Service

O *Web Service* disponibiliza os serviços que serão utilizados pelos aplicativos dos emissores de NFC-e. O mecanismo de utilização do *Web Service* segue as seguintes premissas:

a) Será disponibilizado apenas um *Web Service*, com um único método, que atenderá todos os serviços;

b) O envio da solicitação e a obtenção do retorno serão realizados na mesma conexão, pelo mesmo método.

c) A URL do *Web Service* de cada ambiente autorizador de NFC-e será publicada no portal nacional da Nota Fiscal Eletrônica. Acessando a URL o contribuinte poderá obter o WSDL (*Web Service Description Language*) do serviço.

d) O processo de utilização do *Web Service* sempre é iniciado pelo emissor de NFC-e, enviando uma mensagem nos padrões XML e SOAP (versão 1.2), por meio do protocolo SSL com autenticação mútua.

e) A ocorrência de qualquer erro na validação dos dados recebidos interrompe o processo com a disponibilização de uma mensagem contendo o código e a descrição do erro.
