<!-- p.5 -->
# 2.4. Alterações introduzidas na versão 1.10

- ✓ Retirado o evento ECONF desta Nota Técnica e transferido para outra Nota Técnica que conterá apenas o referido evento.
- ✓ Inclusão do campo CPF (I23d1).
- ✓ No grupo YA. Informações de Pagamento, houve: inclusão do campo dPag (YA03a) e ajustes na descrição dos ID dos campos YA03a, YA03b, YA03c, YA03d, YA07a, YA07b. Foi alterada a descrição do campo cAut para deixar claro que o preenchimento é também para PIX, boletos e outros pagamentos eletrônicos.
- ✓ A regra de validação I23d-10 teve pequeno ajuste na descrição.
- ✓ A regra de validação I23d-20 volta a ter apenas o CNPJ, sendo criada a I23d1-10 para validar o CPF.
- ✓ As regras de validação YA03b-10, YA04-20 e YA09-20 tiveram os números das mensagens de rejeição corrigidos.
- ✓ A regra de validação YA04-10 prevê que, no pagamento por PIX, deve-se informar o grupo de cartões.
- ✓ A regra de validação W16-10 foi corrigida para considerar na regra o valor do ICMS Monofásico sujeito a retenção no faturamento direto de veículos novos (Exceção 1).
- ✓ Incluída regra de validação N28-12 específica para desoneração para o motivo de desoneração 7 – SUFRAMA
