<!-- p.17 -->

# 2.13 Criação do campo “vAjusteBCIBSCBSComExt”

Com o objetivo de viabilizar o correto cálculo da base de cálculo do IBS e da CBS em situações específicas previstas na legislação, foi criado no layout da NFS-e o campo “vAjusteBCIBSCBSComExt”.

O referido campo destina-se a registrar ajustes positivos ou negativos aplicáveis exclusivamente à apuração da base de cálculo do IBS e da CBS, em operações de comércio exterior, sem alteração do valor do serviço/operação (“vServ”) constante do documento fiscal.

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/ | vAjusteBCIBSCBSComExt | E | N | 0-1 | 1-15V2 | Valor monetário padrão para ajuste dos valores de base de cálculo do IBS/CBS nos casos de Comércio Exterior. |

**Hipóteses de Utilização:**

a) Divergência de taxa de conversão de moeda estrangeira

Nas situações em que o valor da operação esteja originalmente expresso em moeda estrangeira, a legislação do IBS e da CBS determina que a conversão para moeda nacional seja realizada com base na taxa de câmbio divulgada pelo Banco Central do Brasil (PTAX), observados os critérios legais aplicáveis ao momento da ocorrência do fato gerador.

Entretanto, para fins de emissão da NFS-e e apuração do ISSQN, poderá ser utilizada regra diversa de conversão cambial, prevista na legislação tributária municipal ou nacional.

<!-- p.18 -->

Como o valor do serviço (“vServ”) informado na NFS-e é atualmente utilizado tanto para a apuração do ISSQN quanto do IBS e da CBS, torna-se necessária a utilização do campo “vAjusteBCIBSCBSComExt” para registrar, quando ocorrer, a diferença decorrente da conversão monetária, ajustando a base de cálculo do IBS e da CBS ao valor efetivamente exigido pela legislação desses tributos.

O valor informado poderá ser:

- positivo, quando a base de cálculo do IBS e da CBS for superior ao valor convertido utilizado na NFS-e; ou
- negativo, quando a base de cálculo do IBS e da CBS for inferior ao valor convertido utilizado na NFS-e.

b) Aplicação de fator de redução na importação de serviços financeiros

Nos casos de importação de serviços financeiros sujeitos à tributação baseada em margem, a legislação prevê a aplicação de fator de redução destinado a contemplar uma margem presumida. Para viabilizar essa sistemática, o contribuinte deverá informar o valor correspondente à redução da base de cálculo do IBS e da CBS resultante da aplicação do fator de redução definido na legislação vigente no campo “vAjusteBCIBSCBSComExt”.

c) Tributação de parcela excedente ao valor de mercado em operações entre partes relacionadas

Nas hipóteses de importação de serviços financeiros realizadas com partes relacionadas, quando aplicável a regra de alíquota zero prevista na legislação, permanece sujeita à tributação a parcela do valor da operação que exceder os preços e taxas usualmente praticados em condições de mercado.

Nessas situações, o campo “vAjusteBCIBSCBSComExt” será utilizado para registrar o ajuste necessário à determinação da parcela efetivamente sujeita à incidência do IBS e da CBS, correspondente ao montante que exceder o valor de mercado praticado.

Em decorrência da criação desse campo, foram revistas as fórmulas de cálculo da base de cálculo do IBS e da CBS (“vBC”):

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/IBSCBS/valores/ | vBC | E | N | 1-1 | 1-15V2 | Valor da base de cálculo (BC) do IBS/CBS antes das reduções para cálculo do tributo bruto.<br><br>vBC = vServ - descIncond – (vCalcAjusteBCIBSCBS ou vCalcAjusteBCLocImoveis) – vISSQN + (vAjusteBCIBSCBSComExt) – vPIS - vCOFINS (até 2026)<br>ou<br>vBC = vServ - descIncond – (vCalcAjusteBCIBSCBS ou vCalcAjusteBCLocImoveis) – vISSQN + (vAjusteBCIBSCBSComExt) (a partir de 2027 até 2032) |
