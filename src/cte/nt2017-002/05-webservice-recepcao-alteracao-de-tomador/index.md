<!-- p.02 -->

# 5. WebService – Recepção (Alteração de Tomador)

## Validações Alteradas

| Regra de Validação | Aplic. | cStat | Efeito |
| --- | --- | --- | --- |
| Se Tipo do CT-e=3 (Substituição) e informado toma3 sem informar indicador de alteração de tomador &lt;indAlteraToma&gt;:<br>- A marcação do tomador do CT-e substituto deve ser igual a informada no CT-e substituído | Obrig. | 738 | Rej. |
| <!-- p.03 --> Se Tipo do CT-e=3 (Substituição) e informado toma4 sem informar indicador de alteração de tomador &lt;indAlteraToma&gt;:<br>- CNPJ/CPF do tomador do CT-e substituto deve ser igual ao informado no CT-e substituído<br><br>\* O CT-e substituído também deve ter informado o toma4 como tomador | Obrig. | 552 | Rej. |
| Se Tipo do CT-e=3 (Substituição) e estiver informado toma4 sem informar indicador de alteração de tomador &lt;indAlteraToma&gt;:<br>- IE do tomador do CT-e substituto deve ser igual ao informado no CT-e substituído<br><br>\* O CT-e substituído também deve ter informado toma4 como tomador | Obrig. | 558 | Rej. |

## Novas Validações da Alteração de Tomador

| Regra de Validação | Aplic. | cStat | Efeito |
| --- | --- | --- | --- |
| Se Tipo do CT-e=3 (Substituição) e informado indicador de alteração de tomador &lt;indAlteraToma&gt;:<br>- O CT-e substituído deve possuir evento de Prestação do Serviço em Desacordo. | Obrig. | 739 | Rej. |
| Se Tipo do CT-e=3 (Substituição), informado indicador de alteração de tomador &lt;indAlteraToma&gt; e informado toma4:<br>- O CNPJ base do tomador informado deve estar relacionado no CT-e substituído como um dos papéis existentes (remetente, destinatário, recebedor, expedidor ou toma4) | Obrig. | 740 | Rej. |
| Se Tipo do CT-e=3 (Substituição), informado indicador de alteração de tomador &lt;indAlteraToma&gt; e informado toma4:<br>- A UF do tomador informado deve a mesma do tomador informado no CT-e substituído | Obrig. | 741 | Rej. |
| Se Tipo do CT-e=3 (Substituição), informado indicador de alteração de tomador &lt;indAlteraToma&gt; e informado toma3:<br>- O tomador indicado no CT-e substituto deve ser diferente do indicado no CT-e substituído | Obrig. | 742 | Rej. |
