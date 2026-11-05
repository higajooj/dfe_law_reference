<!-- p.38 -->
# 7.3. Evento: “Solicitação de Apropriação de Crédito Presumido”

**Função:** Evento a ser gerado pelo adquirente em relação às notas fiscais de aquisição de emissão de terceiros, e que lhe gerem o direito à apropriação de crédito presumido.

**Autor:** Adquirente/Destinatário (quando os dois estiverem preenchidos, devem ser iguais) da nota fiscal

**Exemplo:** Emissão de NF-e destinada à ZFM onde o contribuinte emitente não declara, ou declara a menor o crédito presumido que o destinatário tem direito. Nesta ocasião o destinatário efetua o registro deste evento. Este evento substitui totalmente os valores de crédito presumido declarados na NF-e original.

**Modelo:** NF-e modelo 55

**Código do Tipo de Evento:** XXXXXXX

**Campos:**

1. Tipos de Crédito
   - a. Aquisição de material para reciclagem de Cooperativa
   - b. Aquisição de material intermediário produzido na ZFM (validação que só permite a emissão quando o emitente do evento é o destinatário da NF e emitente e destinatário estejam em situação habilitada na ZFM).
   - c. Aquisição para ALC ou ZFM de região não incentivada (validação que só permite a emissão quando o emitente do evento é o destinatário da NF e quando houver evento de internamento na Suframa vinculado à respectiva NF-e).

   Obs: a identificação do tipo de crédito é importante porque possuem prazos prescricionais diferentes, gerando controles no sistema de apuração

2. Valor do crédito

**Validação:**

<!-- p.39 -->

1. Quando o campo tipo de crédito for igual a 2: emissão do evento permitida somente quando o emitente for o destinatário da NF e emitente e destinatário da NF-e estejam na ZFM;
2. Quando o campo tipo de crédito for igual a 3:
   - a. emissão do evento permitida somente quando o emitente for o destinatário da NF e quando houver evento internamento Suframa vinculado à respectiva NFe.
   - b. O valor do crédito é limitado a 7,5% ou 13,5% do valor da operação, dependendo do Estado de origem do fornecedor.
   - c. Para definir: Prazo para emitir o evento e o termo inicial de contagem desse prazo.
