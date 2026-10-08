<!-- p.31 -->
# 4 Web Services

Os Web Services disponibilizam os serviços que serão utilizados pelos aplicativos dos contribuintes. O mecanismo de utilização dos Web Services segue as seguintes premissas:

a) Será disponibilizado um Web Service por serviço, existindo um método para cada tipo de serviço;  
b) O envio da solicitação e a obtenção do retorno serão realizados na mesma conexão por meio de um único método (processo síncrono).  
c) As URLs dos Web Services encontram-se no Portal Nacional do MDFe (dfe-portal.svrs.rs.gov.br/MDFe). Acessando a URL pode ser obtido o WSDL (Web Services Description Language) de cada Web Service.  
d) O processo de utilização dos Web Services sempre é iniciado pelo contribuinte enviando uma mensagem nos padrões XML e SOAP, através do protocolo TLS com autenticação mútua.  
e) A ocorrência de qualquer erro na validação dos dados recebidos interrompe o processo com a disponibilização de uma mensagem contendo o código e a descrição do erro.
