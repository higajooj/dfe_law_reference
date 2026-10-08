<!-- p.15 -->
# Anexo II – Exemplo de validação da Chave de Acesso em Visual Basic .NET

```vb
Public Class ChaveAcesso
    Private Const TamanhoChaveAcessoSemDV = 43

    Public Shared Function ValidaDigitoChaveAcesso(ByVal chaveAcesso As String) As Boolean
        'Verifica DV
        Dim digito As Char = CalculaDigitoVerificadorChaveAcesso(chaveAcesso).ToString()
        If digito <> chaveAcesso.Substring(43, 1) Then
            Return False
        Else
            Return True
        End If
        'Verifica demais informações da chAcesso (UF, CNPJ, AAAAMM emissão, caracteres inválidos, ...)
        ' ...
        ' ...
    End Function

    Public Shared Function CalculaDigitoVerificadorChaveAcesso(chaveAcesso As String) As Integer
        'Converte a string em um array de bytes, onde cada byte representa o código ASCII do caractere subtraído de 48
        Dim chAcessoBytes(TamanhoChaveAcessoSemDV - 1) As Byte
        For i As Integer = 0 To TamanhoChaveAcessoSemDV - 1
            chAcessoBytes(i) = CByte(Asc(chaveAcesso(i)) - 48)
        Next

        Dim soma As Integer = 0
        Dim peso As Integer = 2 ' multiplicador vai de 9 a 2

        'Começa do final
        For i As Integer = TamanhoChaveAcessoSemDV - 1 To 0 Step -1
            soma = soma + Convert.ToInt32(chAcessoBytes(i)) * peso

            peso += 1
            If peso > 9 Then peso = 2
        Next

        Dim dv As Integer = 11 - (soma Mod 11)
        If dv >= 10 Then
            dv = 0
        End If

        Return dv

    End Function
End Class
```
