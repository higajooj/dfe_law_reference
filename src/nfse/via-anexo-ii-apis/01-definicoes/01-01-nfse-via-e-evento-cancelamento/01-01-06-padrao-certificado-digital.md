# 1.1.6 Padrão de Certificado Digital

O certificado digital utilizado no Ambiente Nacional de NFS-e Via deverá ser emitido por Autoridade Certificadora credenciada pela Infraestrutura de Chaves Públicas Brasileira – ICP-Brasil.

O certificado digital deverá ser do tipo A1 ou A3. Certificados digitais de tipo A1 ficam armazenados no próprio computador utilizado. Certificados digitais do tipo A3 são armazenados em dispositivos portáteis invioláveis do tipo smart card ou token, que possuem um chip com capacidade de realizar a assinatura digital. Este tipo de dispositivo é bastante seguro, pois toda operação é realizada pelo chip existente no dispositivo, sem qualquer acesso externo à chave privada do certificado digital.

Para que um certificado seja aceito na função de transmissor de solicitações este deverá ser do tipo e-aplicação, e-CNPJ (e-PJ). Os certificados digitais podem ser utilizados tanto nas conexões SSL de transmissão, quanto para a assinatura dos eventos.

Transmissão: antes de ser iniciada a transmissão de solicitações ao sistema, o certificado digital do solicitante é utilizado para reconhecer o transmissor e garantir a segurança do tráfego das informações na Internet.

<!-- p.05 -->
Assinatura de documentos: para garantir o não repúdio e a integridade das informações, os documentos eletrônicos enviados são assinados digitalmente seguindo a especificação descrita no item “Padrão de Assinatura Digital” e nas orientações estabelecidas neste manual.

Os Certificados Digitais utilizados no acesso aos serviços disponibilizados pelo sistema e na assinatura dos arquivos XML enviados deverão atender aos seguintes critérios:

| Critério | Mensagem | Efeito |
|---|---|---|
| Certificado de Transmissão não informado | E100 | Rejeição |
| Certificado de Transmissão inválido | E101e102 | Rejeição |
| Autoridade Certificadora Inválida | E103 | Rejeição |
| Não foi possível verificar o não repúdio do Certificado de Transmissão | E104 | Rejeição |
| Certificado de Transmissão expirado | E105 | Rejeição |
| Certificado de Transmissão e-CPF | E106 | Rejeição |
| Não foi possível acessar a Lista de Certificados Revogados | E107 | Rejeição |
| Erro na cadeia de certificado | E108 | Rejeição |
| Certificado de Transmissão Revogado | E109 | Rejeição |
| CNPJ do Certificado de Transmissão não autorizado | E206 | Rejeição |
