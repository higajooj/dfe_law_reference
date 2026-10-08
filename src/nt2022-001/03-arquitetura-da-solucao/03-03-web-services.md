# 03.3 Web Services

Os Web Services disponibilizam os serviços que serão utilizados pelos aplicativos das Empresas. O mecanismo de utilização dos Web Services segue as seguintes premissas:

- É disponibilizado um Web Service para cada tipo de serviço, podendo existir mais de um método para cada serviço;
- O envio da solicitação e a obtenção do retorno serão realizados na mesma conexão, através de um único método;
- A URL dos Web Services está documentada neste documento. Acessando a URL pode ser obtido o WSDL (Web Services Description Language) de cada Web Service;
- O fluxo de comunicação sempre é iniciado pelo aplicativo da Empresa interessada através do envio de uma mensagem ao Web Service com a solicitação do serviço desejado;
- A ocorrência de qualquer erro na validação dos dados recebidos interrompe o processo com a disponibilização de uma mensagem contendo o código e a descrição do erro;
- Não serão usados parâmetros no SOAP Header.
- Serão mantidos controles para identificar as situações de “uso indevido”, no consumo excessivo do Web Service em um curto espaço de tempo. As novas tentativas poderão ser rejeitadas com o erro “656–Rejeição: Consumo Indevido”.
