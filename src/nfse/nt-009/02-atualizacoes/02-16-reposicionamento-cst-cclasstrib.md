<!-- p.21 -->

# 2.16 Reposicionamento dos campos “CST” e “cClassTrib” e Adequação das Regras de Ocorrência dos Grupos IBS/CBS

Com o objetivo de adequar o layout da NFS-e às diferentes hipóteses de tributação previstas para o IBS e a CBS, os campos ‘CST’ e ‘cClassTrib’ foram reposicionados, passando a localizarem-se previamente ao grupo “gIBSCBS”.

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/** | **valores** | **G** | **-** | **1-1** | **-** | **Grupo de informações relativas aos valores do serviço prestado para IBS e CBS** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/** | **trib** | **G** | **-** | **1-1** | **-** | **Grupo de informações relacionados aos tributos IBS e CBS** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/ | CST | E | N | 1-1 | 3 | Código de Situação Tributária do IBS e da CBS |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/ | cClassTrib | E | N | 1-1 | 6 | Código de Classificação Tributária do IBS e da CBS |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/** | **gIBSCBS** | **G** | **-** | **0-1** | **-** | **Grupo de informações relacionadas ao IBS e à CBS** |

Essa alteração decorre da necessidade de permitir a identificação prévia do enquadramento tributário da operação por meio do CST e, consequentemente, possibilitando definir se as informações detalhadas do grupo de tributação do IBS/CBS deverão ou não ser informadas. As regras que relacionam quando determinado CST exige ou não o grupo de tributação do IBS/CBS estão evidenciadas no indicador de tributação IBS/CBS (“ind_gIBSCBS”), relacionado na Tabela CST e Classificação Tributária (cClassTrib), conforme Informe Técnico 2025.002 v.1.60 - Publicado em 23/06/2026, disponível em <https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=jxTMMQeEVM8=>.

A modificação torna especialmente viável o correto tratamento dos casos em que não há exigência de preenchimento das informações de tributação do IBS/CBS, em particular para os seguintes códigos de situação tributária:

<!-- p.22 -->

- CST 400 – Isenção;
- CST 410 – Imunidade e não incidência;
- CST 820 – Tributação em documento específico.

Em decorrência dessa alteração estrutural, determinados campos e grupos relacionados ao IBS/CBS passaram a possuir ocorrência facultativa (OCOR. 0-1), uma vez que suas obrigatoriedades passam a depender do valor do indicador “ind_gIBSCBS” presente na Tabela CST e Classificação Tributária (cClassTrib) e derivado do CST informado:

- Na NFS-e:
  - NFSe/infNFSe/IBSCBS/cLocalidadeIncid
  - NFSe/infNFSe/IBSCBS/xLocalidadeIncid
  - NFSe/infNFSe/IBSCBS/valores
  - NFSe/infNFSe/IBSCBS/valores/vBC
  - NFSe/infNFSe/IBSCBS/totCIBS/gIBS
  - NFSe/infNFSe/IBSCBS/totCIBS/gCBS
- Na DPS:
  - NFSe/infNFSe/DPS/infDPS/IBSCBS/cIndOp
  - NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS

Dessa forma, os grupos e campos relacionados ao detalhamento da tributação do IBS/CBS somente deverão ser informados quando o “ind_gIBSCBS” presente na Tabela CST e Classificação Tributária (cClassTrib), determinado pelo CST informado, indicar a existência de tributação a ser declarada. Nos demais casos, tais informações não deverão ser preenchidas, em conformidade com as regras de validação estabelecidas pelo layout.

Com o objetivo de facilitar o entendimento e o correto preenchimento dos Documentos Fiscais Eletrônicos (DF-e), a Tabela CST e Classificação Tributária (cClassTrib) está disponível nos Portais Nacionais de DF-e em formato online e interativo também incorporada na Calculadora de Tributos:

**Tabelas CST e Classificação Tributária (cClassTrib):**

- <https://consumo.tributos.gov.br/servico/calcular-tributos-consumo/calculadora/classificacoes-tributarias>
- <https://dfe-portal.svrs.rs.gov.br/DFE/ClassificacaoTributaria>

**Calculadora de Tributos:**

A Calculadora é o motor de cálculo oficial dos tributos da Reforma Tributária sobre o Consumo. Projetada para auxiliar os contribuintes na correta emissão dos documentos fiscais, está disponível em duas modalidades: versão online, na Plataforma da Reforma Tributária, e offline, em código aberto, para ser embarcado nos ERP’s dos contribuintes via API. Além de calcular os valores de CBS, IBS e <!-- p.23 -->IS, esta ferramenta disponibiliza a memória de cálculo, com a respectiva base legal, e gera os grupos XML referentes à operação de consumo. Na NFS-e, no processo de autorização/geração do documento, há uma integração online com a calculadora para validação de campos, verificação de regras e retorno de valores em conformidade.

- Calculadora Online: <https://consumo.tributos.gov.br/servico/calcular-tributos-consumo/calculadora/regime-geral>
- Calculadora Offline: <https://consumo.tributos.gov.br/servico/calcular-tributos-consumo/calculadora/calculadora-offline>

---

**CARLOS EDUARDO BURKLE**

Auditor Fiscal de Tributos – Londrina/PR

Secretário-Executivo da Secretaria-Executiva do Comitê Gestor da Nota Fiscal de Serviço Eletrônica de Padrão Nacional (SE/CGNFS-e)
