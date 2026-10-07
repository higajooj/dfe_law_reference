<!-- p.11 -->
# 3.9 Validação das regras de negócio do evento EPEC

| # | Regra de Validação | Aplic. | Msg | Efeito |
|---|---|---|---|---|
| P07-10 | Validar se atributo Id corresponde à concatenação dos campos do evento (“ID” + tpEvento + chNFe + nSeqEvento) (\*1) | Obrig. | 572 | Rej. |
| P08-10 | Código do órgão de recepção do Evento diverge do solicitado. (\*1) | Obrig. | 250 | Rej. |
| P09-10 | Tipo do ambiente difere do ambiente do Web Service (\*1) | Obrig. | 252 | Rej. |
| P10-10 | Se informado CNPJ do Autor do evento:<br>- CNPJ inválido (DV, zeros ou não informado) (\*1) | Obrig. | 489 | Rej. |
| P11-10 | Se informado CPF do Autor do evento:<br>- CPF do autor do evento informado inválido (DV ou zeros) (\*1) | Obrig. | 490 | Rej. |
| P11-20 | - Evento não disponível para Autor pessoa física (CPF) | Obrig. | 408 | Rej. |
| P12-10 | Validação da Chave de Acesso:<br>- Dígito verificador inválido (\*1) | Obrig. | 236 | Rej. |
| P12-14 | - Código UF inválido (\*1) | Obrig. | 614 | Rej. |
| P12-18 | - Ano < 06 ou Ano maior que Ano corrente (\*1) | Obrig. | 615 | Rej. |
| P12-22 | - Mês = 0 ou Mês > 12 (\*1) | Obrig. | 616 | Rej. |
| P12-26 | - CNPJ zerado ou dígito inválido (\*1) | Obrig. | 617 | Rej. |
| P12-30 | - Modelo diferente de 65 (\*1) | Obrig. | 618 | Rej. |
| P12-34 | - Número NF = 0 (\*1) | Obrig. | 619 | Rej. |
| P12-50 | - Tipo de Emissão difere de “4” (posição 35 da Chave de Acesso) | Obrig | 484 | Rej. |
| P12-60 | - Verificar se CNPJ difere do CNPJ da Chave de Acesso (\*1, Evento do Emitente) | Obrig. | 574 | Rej. |
| P13-10 | Data do evento não pode ser maior que a data de processamento (aceitar uma tolerância de até 5 minutos) (\*1) | Obrig. | 578 | Rej. |
| P14-10 | Verificar se sequencial do evento (nSeqEvento) difere de 1 | Obrig. | 594 | Rej. |
| P20-10 | Verificar se o órgão do Autor (cOrgaoAutor) difere da UF da Chave de Acesso (Evento do Emitente) | Obrig. | 455 | Rej. |
| P21-10 | Verificar se Tipo do Autor difere de "1=Empresa Emitente" | Obrig. | 466 | Rej. |
| P23-10 | Data de Emissão ocorrida a mais de 1 dia | Obrig. | 228 | Rej. |
| P23-20 | Data de Emissão maior do que a data do evento (dhEvento) | Obrig. | 577 | Rej. |
| P23-30 | Ano-Mês da Data de Emissão (dhEmi) diverge do Ano-Mês da Chave de Acesso | Obrig. | 659 | Rej. |
| P25-10 | Validação da IE do Emitente:<br>- IE Emitente com zeros ou nulo | Obrig. | 229 | Rej. |
| P25-20 | - IE inválida para a UF: erro no tamanho, composição ou dígito verificador | Obrig. | 209 | Rej. |
| P26-10 | NFC-e sem a identificação do destinatário quando ValorTotal > R$10.000,00 (tag:infNFe/dest) (\*2) | Obrig. | 719 | Rej. |
| P28-10 | Se informado CNPJ do destinatário:<br>- CNPJ com zeros ou dígito de controle inválido | Obrig. | 208 | Rej. |
| P29-10 | Se informado CPF do Destinatário:<br>- CPF com zeros, 111..., 222..., ..., 999..., ou dígito de controle inválido | Obrig. | 237 | Rej. |
| P31-10 | Valor da NFC-e superior ao valor limite estabelecido (\*2) | Obrig. | 628 | Rej. |
| P32-10 | Valor do ICMS superior ao valor limite (\*2) | Obrig. | 417 | Rej. |
| | **Banco de Dados: Emitente / Cadastro de Emitente** | | | |
| 1P25-10 | Acessar Cadastro de Emitentes (Chave: UF, IE):<br>- IE emitente não cadastrada | Obrig. | 230 | Rej. |
| 1P25-20 | - IE Emitente não vinculada ao CNPJ | Obrig. | 231 | Rej. |
| 1P25-30 | - Emitente não habilitado para emissão de NFC-e | Obrig. | 203 | Rej. |
| 1P25-40 | - Emitente em situação irregular perante o Fisco | Obrig. | 301 | Rej. |
| | **Banco de Dados: Emitente / Controle Ambiente EPEC** | | | |
| 2P10-10 | Acessar BD Ambiente de Contingência EPEC (Chave: UF,<!-- p.12 --> CNPJ Emitente):<br>- Verificar se Ambiente EPEC está bloqueado para o Emitente (\*3) | Obrig. | 142 | Rej. |
| | **Banco de Dados: Numeração da NFC-e** | | | |
| 3P12-10 | Acesso ao BD de Eventos (Chave: Modelo=65, tpEvento=110140, UF, CNPJ Emitente, Série, Número da NFC-e)<br>- Verificar se já existe EPEC para a numeração da NFC-e | Obrig. | 485 | Rej. |
| 4P12-10 | Acesso ao BD NFC-e (Chave: Modelo=65, UF Emitente, CNPJ Emitente, Série e Nro da NFC-e):<br>- NFC-e já existente para o número do EPEC informado | Obrig. | 661 | Rej. |
| 5P12.10 | Acesso ao BD de Inutilização (Chave: Modelo=65, UF Emitente, CNPJ Emitente, Série e Nro):<br>- Numeração do EPEC está inutilizada na Base de Dados da SEFAZ | Obrig. | 662 | Rej. |

Nota:  
(\*1) Validações genéricas do Registro de Evento;  
(\*2) Valor parametrizável, ficando a critério da UF.  
(\*3) No caso do ambiente de contingência EPEC bloqueado para o emitente, serão retornadas as Chaves de Acesso de até 50 EPEC pendentes de conciliação (tag:chNFePend);
