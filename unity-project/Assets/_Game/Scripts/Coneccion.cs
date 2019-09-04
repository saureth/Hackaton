using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class Coneccion : MonoBehaviour
{
	public string urlConeccion = "http://192.168.137.1:3000/";
	public bool ocupado = false;
	public string respuesta;

	public static Coneccion singleton;

	private void Awake()
	{
		singleton = this;
	}

	public void ConsumirServicio(string s)
	{
		ocupado = true;
		StartCoroutine(GetText(s));
	}

	IEnumerator GetText(string servicio)
	{
		
		UnityWebRequest www = UnityWebRequest.Get(urlConeccion + "/" + servicio);
		yield return www.Send();
		ocupado = false;
		if (www.isNetworkError)
		{
			Debug.Log(www.error);
			respuesta = "Error";
		}
		else
		{
			// Show results as text
			Debug.Log(www.downloadHandler.text);
			respuesta = www.downloadHandler.text;
			// Or retrieve results as binary data
			//byte[] results = www.downloadHandler.data;
		}
	}
}
