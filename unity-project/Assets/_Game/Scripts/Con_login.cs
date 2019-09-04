using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class Con_login : MonoBehaviour
{
	public InputField inUsuario;
	public InputField inPass;

	public void IniciarSesion()
	{
		StartCoroutine(Iniciar());
	}

	IEnumerator Iniciar()
	{
		Coneccion.singleton.ConsumirServicio("login?email="+inUsuario.text + "&password=" + inPass.text);
		
		yield return new WaitUntil(() => !Coneccion.singleton.ocupado);
		if (Coneccion.singleton.respuesta.Length > 3 && Coneccion.singleton.respuesta.Substring(0,3) == "{\"i")
		{
			SceneManager.LoadScene("Base");
		}
		
	}
}
