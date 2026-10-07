<!-- p.14 -->
# 4.2. JA. Detalhamento Específico de Veículos Novos

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| J19-10 | 55 | Verificar se o código do tipo de veículo (campo: tpVeic) consta na Tabela de Tipo e Espécie de Veículo<br>**Observação 1:** Tabela de Tipo e Espécie de Veículo publicada na aba “Documentos”, opção “Diversos” do Portal Nacional da NF-e (www.nfe.fazenda.gov.br) | Obrig. | 841 | Rej. | Rejeição: Código do Tipo de Veículo Inexistente [nItem:nnn] |
| J20-10 | 55 | Verificar se o código da espécie de veículo (campo: espVeic) consta na Tabela de Tipo e Espécie de Veículo<br>**Observação 1:** Tabela de Tipo e Espécie de Veículo publicada na aba “Documentos”, opção “Diversos” do Portal Nacional da NF-e (www.nfe.fazenda.gov.br) | Obrig. | 842 | Rej. | Rejeição: Código da espécie de Veículo Inexistente [nItem:nnn] |
| J20-20 | 55 | Verificar se o código da espécie de veículo (campo: espVeic) é compatível com o tipo de veículo (campo: tpVeic) conforme Tabela de Tipo e Espécie de Veículo<br><!-- p.15 -->**Observação 1:** Tabela de Tipo e Espécie de Veículo publicada na aba “Documentos”, opção “Diversos” do Portal Nacional da NF-e (www.nfe.fazenda.gov.br) | Obrig. | 843 | Rej. | Rejeição: Código da espécie de Veículo incompatível com o tipo do Veículo. [nItem:nnn] |
