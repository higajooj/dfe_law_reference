# 3.3 Mensagem de Retorno Compactada

O tamanho médio do MDF-e é de aproximadamente 10 KB, necessitando de um dimensionamento correto da rede interna e do canal de Internet das empresas e do Ambiente Nacional.

Para minimizar necessidades de infraestrutura de rede cada documento contido na mensagem de retorno da solicitação será compactado (tag:`docZip`). Estima-se que a compactação reduzirá o tamanho da mensagem de retorno em aproximadamente 60%.

A aplicação do Ambiente Nacional irá compactar individualmente cada documento da mensagem de retorno e a aplicação cliente deverá descompactá-lo e seguir o procedimento normal do tratamento do documento descompactado.

<!-- p.14 -->

O padrão de compactação adotado para o projeto será o Gzip (GNU zip) que é implementado nas plataformas Java e .NET.
