using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Colores : MonoBehaviour
{
	public Material mat;
	public Texture2D texturaPiel;
	[Range(0, 1)]
	public float colorPielF;
	public Gradient colorPiel;
	public Color colorTatoo;
	public Texture2D tatoo;

	public Texture2D miTextura;

    public void Generar()
    {
		miTextura = new Texture2D(512, 512);//, TextureFormat.ARGB32, false);
		for (int i = 0; i < 512; i++)
		{
			for (int j = 0; j < 512; j++)
			{
				Color c = colorPiel.Evaluate(colorPielF);
				Color ct = tatoo.GetPixel(i, j); ;
				Color c2 = texturaPiel.GetPixel(i, j);

				c.r = (c.r * c2.r * c2.r) * (1 - ct.a) + (colorTatoo.r * ct.a);
				c.g = (c.g * c2.g * c2.g) * (1 - ct.a) + (colorTatoo.g * ct.a);
				c.b = (c.b * c2.b * c2.b) * (1 - ct.a) + (colorTatoo.b * ct.a);
				
				miTextura.SetPixel(i, j, c);
			}
		}
		miTextura.Apply();
		mat.mainTexture = miTextura;

	}

    // Update is called once per frame
    void Update()
    {
        
    }
}
