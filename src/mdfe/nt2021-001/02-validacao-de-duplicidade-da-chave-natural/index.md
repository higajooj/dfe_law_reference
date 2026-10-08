<!-- p.05 -->

# 2 Validação de duplicidade da chave natural

A Autorização do MDF-e prevê um ambiente centralizado de autorização, hospedado na SEFAZ Virtual Rio Grande do Sul (SVRS). Em um cenário de um banco de dados centralizado, a validação atual garante que um mesmo CNPJ/CPF, Modelo, Série e Número não sejam autorizados.

Prevendo a possibilidade futura de existirem múltiplos ambientes de autorização, faz-se necessário esclarecer que essa validação considera o ambiente de autorização para o qual o documento foi transmitido, identificado pela Forma de Emissão e endereço do serviço de recepção acionado.

Em caso de autorização da mesma numeração em sites distintos, cabe ao emitente tomar as providências em relação a duplicidade ou não do fato gerador representado pela numeração dos DF-e autorizados.

**Validações das Regras de Negócio MDF-e**

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| G068 | Acesso BD MDF-e (Chave: CNPJ / CPF Emit, Modelo, Serie, Nro.)<br>- Verificar duplicidade de MDF-e<br>Retornar o número do protocolo e data de autorização do MDF-e:<br>[nProt:999999999999999]<br>[dhAut: AAAA-MM-DDTHH:MM:SS TZD].<br><br><span style="color:#ff0000">Observação: Esta validação leva em consideração o ambiente de autorização do DF-e</span> | Obrig. | 204 | Rej. |
