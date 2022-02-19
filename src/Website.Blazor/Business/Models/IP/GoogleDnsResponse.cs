namespace Business.Models.IP;

public class GoogleDnsResponse
{

    public int Status { get; set; }
    public Answer[] Answer { get; set; }
    public string Comment { get; set; }

    public bool IsOk => Status == 0;
}

public class Answer
{
    public string Name { get; set; }
    public RecordType Type { get; set; }
    public int TTL { get; set; }
    public string Data { get; set; }
}