using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class girador : MonoBehaviour
{
	public Vector3 velocidad;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
		transform.Rotate(velocidad * Time.deltaTime);
    }

	public void CargarInicio()
	{
		SceneManager.LoadScene("Login");
	}
}
