<!-- p.06 -->

# 2 Serviço Síncrono de Recepção de CTe Simplificado

O Serviço de Recepção de CTe Simplificado é o serviço oferecido pelos Portais das Secretarias de Fazenda dos Estados em cumprimento ao disposto no **Ajuste SINIEF 46 de 08 de dezembro de 2023**.

O CTe Simplificado poderá ser utilizado nas prestações de serviços de transporte intermunicipal ou interestadual de mercadorias, que envolvam diversos remetentes ou destinatários, e um único tomador de serviço. O transportador poderá emitir um único CT-e referente a todas as prestações realizadas para este tomador.

A forma de processamento do serviço de recepção é síncrona sem a formação de lotes. O contribuinte deve transmitir o CTe simplificado através do Web Service de recepção exclusivo que atenderá esse leiaute e receberá o resultado do processamento na mesma conexão.

**Função**: serviço destinado à recepção de mensagens de envio de CTe Simplificado

**Processo**: síncrono.

**Nome Serviço**: CTeRecepcaoSimpV4

**Método**: cteRecepcaoSimp

**Parâmetro da Mensagem da área de dados**: Compactada utilizando GZip (Base64)

As subseções deste capítulo estão em:

- [2.1 Leiautes](02-01-leiautes.md)
- [2.2 Regras de Validação Gerais](02-02-regras-de-validacao-gerais.md)
- [2.3 Regras de negócio do CTe Simplificado](02-03-regras-de-negocio-cte-simplificado.md)
