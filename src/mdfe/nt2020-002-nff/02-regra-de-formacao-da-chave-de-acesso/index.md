# 2 Regra de formação da chave de acesso do MDF-e

## Chave de acesso

<!-- REVISAR p.05: no original, o subtítulo deste item aparece numerado como "3.1." (numeração automática inconsistente com o capítulo 2; o Sumário o lista sem número). Transcrito sem número. -->

A chave de acesso do MDF-e deverá ser gerada pelo aplicativo da NFF, que controlará a série e a numeração de ambas.

A Chave de Acesso da NFF será composta da seguinte forma:

| | Código da UF | AAMM da emissão | CPF do TAC | Modelo (mod) | Série (serie) | Número (Dia Emi. + PV + Nro. DFe) | Forma de emissão | Código Numérico | DV |
|---|---|---|---|---|---|---|---|---|---|
| **Quantidade de caracteres** | **02** | **04** | **14** | **02** | **03** | **09** | **01** | **08** | **01** |

- **cUF** - Código da UF do carregamento do DF-e
- **AAMM** - Ano e Mês de emissão do MDF-e
- **CPF** - CPF do emitente TAC preenchido com zeros a esquerda.
- **mod** - Modelo do Documento Fiscal (58)
- **serie** - Série do Documento Fiscal
  - **Gerado e controlado por dispositivo**
    - **1 dígito para identificar o Nro. Do dispositivo**
    - **2 dígitos para identificar o ano**

<!-- p.06 -->

- **nMDF** - Número do Documento Fiscal
  - **Gerado e controlado sequencialmente por dispositivo:**
    - **2 dígitos do mês da emissão**
    - **2 dígitos do dia da emissão**
    - **5 dígitos sequenciais para o número com reinício diário por dispositivo**
- **tpEmis** - forma de emissão do DF-e
  - **3 – Emissão pelo regime especial da NFF**
- **cCT** - Código Numérico que compõe a Chave de Acesso
  - **Randômico de 8 dígitos**
- **cDV** - Dígito Verificador da Chave de Acesso
  - **O dígito verificador da chave de acesso do MDF-e é baseado em um cálculo do módulo 11**
