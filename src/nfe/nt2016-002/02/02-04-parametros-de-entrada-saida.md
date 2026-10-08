# 2.4 Parâmetros de Entrada / Saída na Chamada aos Web Services

Atualmente não está padronizado o nome do parâmetro de retorno dos Web Services disponibilizados pelas SEFAZ Autorizadoras. Ou seja, a tag raiz do SOAP BODY do retorno de cada Web Service está com nome diferente, conforme o Web Service e a SEFAZ Autorizadora.

Com a falta de padronização, algumas empresas com filiais em várias UF acabam efetuando de forma sistemática a consulta ao WSDL do Web Service de cada SEFAZ Autorizadora, unicamente para obter essa informação.

Padronizado o parâmetro de saída para todos os Web Services desta nova versão, de todas as SEFAZ Autorizadoras, definindo o nome deste parâmetro como: `<nfeResultMsg>`.

Desta forma, o nome dos parâmetros dos Web Services fica:

- Parâmetro de Entrada: `<nfeDadosMsg>`;
- Parâmetro de Saída: `<nfeResultMsg>`.
