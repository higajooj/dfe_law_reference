# 4.3. Novos campos no quadro “Dados dos Produtos/Serviços”

No detalhamento dos itens, o modelo incorpora a identificação da classificação tributária e as bases, alíquotas e valores dos tributos da Reforma Tributária. Os campos abaixo correspondem diretamente ao Grupo UB do leiaute da NF-e:

| Campo impresso | Tag (XML) — ID |
|---|---|
| Classificação Tributária do IBS/CBS | cClassTrib – UB14 |
| Base de Cálculo IBS/CBS | vBC – UB16 |
| Alíquota IBS UF | pIBSUF – UB18;<br>**Observação:** se gIBSUF/gRed informado:<br>pAliqEfet – UB28 |
| Valor IBS UF | vIBSUF – UB35 |
| Alíquota IBS Município | pIBSMun – UB37;<br>**Observação:** se gIBSMun/gRed informado:<br>pAliqEfet – UB47 |
| Valor IBS Município | vIBSMun – UB54 |
| Alíquota CBS | pCBS – UB56;<br>**Observação:** se gCBS/gRed informado: pAliqEfet – UB66 |
| Valor CBS | vCBS – UB67 |
| Base de Cálculo do IS | vBCIS – UB05 |
| Alíquota do IS | pIS – UB06 |
| Valor do IS | vIS – UB11 |

**Observação:** Regra de impressão das alíquotas: quando houver redução de alíquota (ind_gRed = 1) ou compra governamental (gCompraGov), hipóteses em que o grupo gRed é informado, o DANFE deverá exibir a alíquota efetiva (pAliqEfet) para IBS UF, IBS Município e CBS. Na ausência do grupo gRed, deverá exibir a alíquota vigente (pIBSUF, pIBSMun ou pCBS). Para o Imposto Seletivo, permanece a alíquota pIS – UB06.
