namespace backend.Exceptions;

public class InvalidPortNumberException : Exception
{
    public InvalidPortNumberException(string error)
    {
        Error = error;
    }

    public string Error { get; set; }
}