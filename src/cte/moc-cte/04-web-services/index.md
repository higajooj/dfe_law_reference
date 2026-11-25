<!-- p.30 -->

# 4. Web Services

Os Web Services disponibilizam os serviços que serão utilizados pelos aplicativos dos contribuintes.

O mecanismo de utilização dos Web Services segue as seguintes premissas:

a) Será disponibilizado um Web Service por serviço, existindo um método para cada tipo de serviço;

b) O envio da solicitação e a obtenção do retorno serão realizados na mesma conexão por meio de um único método (processo síncrono);

c) As URLs dos Web Services encontram-se no Portal Nacional do CTe (www.cte.fazenda.gov.br) e no portal da SVRS (dfe-portal.svrs.rs.gov.br/cte). Acessando a URL pode ser obtido o WSDL (Web Services Description Language) de cada Web Service.

d) O processo de utilização dos Web Services sempre é iniciado pelo contribuinte enviando uma mensagem nos padrões XML e SOAP, através do protocolo TLS com autenticação mútua;

e) A ocorrência de qualquer erro na validação dos dados recebidos interrompe o processo com a disponibilização de uma mensagem contendo o código e a descrição do erro.

As subseções deste capítulo estão em:

- [4.1. Regras de Validação Gerais](04-01-regras-de-validacao-gerais.md)
- [4.2. Serviço de Recepção de CTe de Transporte de Carga (modelo 57)](04-02-servico-de-recepcao-de-cte-transporte-de-carga-modelo-57.md)
- [4.3. Serviço de Recepção de CTe Outros Serviços (modelo 67)](04-03-servico-de-recepcao-de-cte-outros-servicos-modelo-67.md)
- [4.4. Serviço de Recepção de GTVe (Modelo 64)](04-04-servico-de-recepcao-de-gtve-modelo-64.md)
- [4.5. Serviço de Consulta Situação do CTe](04-05-servico-de-consulta-situacao-do-cte.md)
- [4.6. Serviço de Consulta Status do Serviço de Autorização](04-06-servico-de-consulta-status-do-servico-de-autorizacao.md)
- [4.7. Serviço de Consulta Cadastro (NFeConsultaCadastro)](04-07-servico-de-consulta-cadastro.md)
