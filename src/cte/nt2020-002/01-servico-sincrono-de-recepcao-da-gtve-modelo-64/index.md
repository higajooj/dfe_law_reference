<!-- p.05 -->

# 1 Serviço Síncrono de Recepção da GTVe (Modelo 64)

O Serviço de Recepção de Guia de Transporte de Valores Eletrônica é o serviço oferecido pelos Portais das Secretarias de Fazenda dos Estados para recepção das GTVe emitidos pelos contribuintes credenciados em sua unidade federada.

A forma de processamento do serviço de recepção de GTVe é síncrona sem a formação de lotes. O contribuinte deve transmitir uma GTVe (modelo 64) através do Web Service de recepção de GTVe e receberá o resultado do processamento na mesma conexão.

**Função:** serviço destinado à recepção de mensagens de envio de GTVe (modelo 64).

**Processo:** síncrono.

**Método: cteRecepcaoGTVe**

**Parâmetro da Mensagem da área de dados:** Compactada utilizando GZip (Base64)

As subseções deste capítulo estão em:

- [1.1.1 Leiaute Mensagem de Entrada](01-01-01-leiaute-mensagem-de-entrada.md)
- [1.1.2 Leiaute Mensagem de Retorno](01-01-02-leiaute-mensagem-de-retorno.md)
- [1.1.3 Leiaute da GTVe processada](01-01-03-leiaute-da-gtve-processada.md)
- [1.1.4 Regras de Validação Básicas do Serviço](01-01-04-regras-de-validacao-basicas-do-servico.md)
- [1.1.5 Validação da área de dados da mensagem](01-01-05-validacao-da-area-de-dados-da-mensagem.md)
- [1.1.6 Validações do Certificado de Assinatura](01-01-06-validacoes-do-certificado-de-assinatura.md)
- [1.1.7 Validação da Assinatura Digital](01-01-07-validacao-da-assinatura-digital.md)
- [1.1.8 Regras de negócio da GTVe (modelo 64)](01-01-08-regras-de-negocio-da-gtve-modelo-64.md)
- [1.1.9 Final do Processamento da GTVe](01-01-09-final-do-processamento-da-gtve.md)
