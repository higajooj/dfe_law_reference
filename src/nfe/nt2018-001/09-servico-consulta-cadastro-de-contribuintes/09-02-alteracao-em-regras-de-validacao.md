<!-- p.21 -->
# 9.2 Alteração em Regras de Validação (item 4.7.7.2 do MOC)

| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| K02 | Se Certificado de Transmissão = e-CNPJ:<br>- Acessar Cadastro Centralizado de Contribuintes (CCC):<br>~~- Acessar Cadastro Nacional de Emissores (CNE):~~<br>&nbsp;&nbsp;- Verificar CNPJ do Certificado Digital é emitente de NF-e | Obrig. | 257 | Rej. | Rejeição: Solicitante não habilitado para emissão da NF-e |
| K02a | Se Certificado de Transmissão = e-CPF:<br>&nbsp;&nbsp;- Acessar Cadastro Centralizado de Contribuintes (CCC):<br>&nbsp;&nbsp;&nbsp;&nbsp;- Verificar CPF do Certificado Digital é emitente de NF-e | Obrig. | 257 | Rej. | Rejeição: Solicitante não habilitado para emissão da NF-e |

> **Revogado/Descontinuado:** linha da RV K02 riscada na fonte (acesso ao Cadastro Nacional de Emissores).
